import {
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { isEmpty, map, property } from 'lodash';
import { DynFormBaseComponent } from '../form-base/form-base';
import { ITableConfig } from '../ITableBase';
import { TableDialogComponent } from './table-dialog/table-dialog.component';

export const TableDialogConfig = {
    maxWidth: '100vw',
    animation: { to: 'top' },
    panelClass: 'table-form-dialog-container',
};
export enum SortType {
    string = 'string',
    number = 'number',
    date = 'date',
}
export enum SortOrder {
    ASC = 'asc',
    DESC = 'desc',
}
@Component({
    selector: 'jlcl-table',
    templateUrl: './jl-form-table.component.html',
    styleUrls: ['./jl-form-table.component.scss'],
})
export class DynTableComponent extends DynFormBaseComponent implements OnInit {
    @Input()
    config!: ITableConfig;
    displayColumns: string[] = [];
    formArray!: FormArray;
    emptyData: any[] = [];
    defaultSortActive = '';
    isMobileView!: boolean;
    constructor(
        protected changeRef: ChangeDetectorRef,
        private translate: TranslateService,
        private fb: FormBuilder,
    ) {
        super(changeRef);
    }

    get formControl(): FormArray {
        return super.formControl as FormArray;
    }

    private clearFormControlsFromFormArray(formArrayIndex: number) {
        Object.keys(
            (this.formArray.at(formArrayIndex) as FormGroup).controls
        ).forEach((key) => {
            (this.formArray.at(formArrayIndex) as FormGroup).removeControl(key);
        });
    }

    ngOnInit(): void {
        this.getDisplayColumnOrder();
        this.createFormArrayForTable();
        this.setDefaultSort();
        // this.onMobileView();
    }

    ngAfterViewInit() {
        this.formArray.valueChanges.subscribe((array: any) => {
            this.setExistingData(array);
        });
    }

    getDisplayColumnOrder() {
        this.displayColumns = this.config.columnOrder
            ? this.config.columnOrder
            : map(this.config.childConfigs, property(['id']));
        this.displayColumns.push('action');
    }

    setDefaultSort() {
        const sortObj = this.config.sort;
        this.defaultSortActive = sortObj?.columnName || '';
    }

    hiddenPlaceHolder(index: number) {
        return this.formArray && this.formArray.controls.length > index;
    }

    createFormArrayForTable() {
        this.formArray = new FormArray([]);
        this.group.addControl(this.config.id, this.formArray);
        if (
            this.config.hidden !== undefined &&
            this.config.hidden(this.group)
        ) {
            this.formArray.disable();
        }
    }

    setExistingData(array: any) {
        // Assign the data to the data source for the table to render
        let resort;
        if (this.config.sort) {
            resort = array;
            if (this.config.sort && this.config.sort.customized) {
                resort = this.config.sort.customized(array);
            }
        } else {
            resort = array.reverse();
        }

    }

    getColumnHeader(id: string): any {
        let cHeader = '';
        for (const el of this.config.childConfigs) {
            if (el.id === id) {
                this.translate.get(el.columnHeader).subscribe((res: string) => {
                    cHeader = res;
                });
            }
        }
        if (id === 'action') {
            this.translate.get('Table.modifyEntry').subscribe((res: string) => {
                cHeader = res;
            });
        }
        return cHeader;
    }

    openDialog(action: string, element: any): void {
        const index = (this.formArray as FormArray).controls.findIndex(
            (control) =>
                JSON.stringify(control.value) === JSON.stringify(element)
        );
        //removed the label and hint.
        const cloneConfig = Object.assign({}, this.config);
        delete cloneConfig.label;
        delete cloneConfig.hint;
        delete cloneConfig.validation;
        delete cloneConfig.alert;
        cloneConfig.type = 'form';
        const object = {
            action,
            config: cloneConfig,
            group: this.group,
            element,
            tableName: this.config.label,
        };
        const dialogConfig = ['delete', 'disable'].includes(action)
            ? { data: object }
            : {
                  ...TableDialogConfig,
                  data: object,
              };
        const dialogRef = this.dialog.open(TableDialogComponent, dialogConfig);
        if (!['delete', 'disable'].includes(action)) {
        }

        dialogRef.afterClosed().subscribe((res) => {
            if (res.data) {
                this.checkUniqueness(res.data);
                if (res && res.event == 'add') {
                    this.formArray.push(this.fb.group(res.data));
                } else if (res && res.event === 'delete') {
                    this.formArray.removeAt(index);
                } else if (res && res.event === 'edit') {
                    this.clearFormControlsFromFormArray(index);
                    Object.entries(res.data).forEach(([key, value]) => {
                        (this.formArray.at(index) as FormGroup).setControl(
                            key,
                            this.fb.control(value)
                        );
                    });
                }
            }
        });
    }

    getCellValue(element: any, dc: string) {
        for (const el of this.config.childConfigs) {
            if (el.id === dc) {
                const titleMobie = this.config.mobileView;
                if (
                    this.isMobileView &&
                    titleMobie?.titleTransformDisplay &&
                    titleMobie?.columnOrder[0] === dc
                ) {
                    return titleMobie.titleTransformDisplay(element);
                }
                return el.transformDisplay
                    ? el.transformDisplay(element[dc], {
                          isMobileView: this.isMobileView,
                          rowValues: element,
                      })
                    : element[dc];
            }
        }
    }

    checkUniqueness(data: any) {
        this.config.childConfigs.forEach((config) => {
            if (
                config.unique &&
                data[config.id] &&
                !isEmpty(this.formArray.controls) &&
                data[config.id] === config.unique.watchValue
            ) {
                this.formArray.controls.forEach((fg) => {
                    fg.patchValue({
                        [config.id]: config.unique?.resetValue,
                    });
                });
            }
        });
    }

    getMobileViewClassName(dc: string): string {
        if (this.config.mobileView) {
            if (this.config.mobileView.oneLineFromToDateIDs?.includes(dc)) {
                return 'date-one-line';
            }
            return this.config.mobileView.columnOrder[0] === dc
                ? 'm-card-title'
                : 'mobile-view-label';
        }
        return '';
    }

    getContentClassName(dc: string): string {
        if (
            this.isMobileView &&
            this.config.mobileView &&
            this.config.mobileView.columnOrder[0] === dc
        ) {
            return 'subtitle1';
        }
        return 'body2';
    }
    displayHeaderOnCell(dc: string): boolean {
        return !!this.config.mobileView?.oneLineFromToDateIDs?.includes(dc);
    }
}
