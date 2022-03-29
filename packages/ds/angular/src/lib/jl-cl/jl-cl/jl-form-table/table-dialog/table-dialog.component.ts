import {
    ChangeDetectorRef,
    Component,
    Inject,
    Input,
    OnInit,
    Optional,
    ViewChild
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITableConfig } from 'jl-cl/jl-cl/ITableBase';

@Component({
    selector: 'app-table-dialog',
    templateUrl: './table-dialog.component.html',
    styleUrls: ['./table-dialog.component.scss'],
})
export class TableDialogComponent implements OnInit {
    action!: string;
    dialogData: any;
    @Input()
    config!: ITableConfig;
    dialogGroup!: FormGroup;
    scrollable = false;
    @ViewChild('containerElement') containerElement!: any;
    deleteContent!: string;
    constructor(
        protected changeRef: ChangeDetectorRef,
        public dialogRef: MatDialogRef<TableDialogComponent>,
        @Optional() @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.dialogData = { ...data };
        dialogRef.disableClose = true;
    }

    ngOnInit(): void {
        this.action = this.dialogData.action;
        this.config = this.dialogData.config;
        this.dialogGroup = new FormGroup({});
    }

    ngAfterViewInit() {
        if (this.dialogData.action === 'edit') {
            this.dialogGroup.controls[this.config.id].patchValue(
                this.dialogData.element
            );
        }
        this.changeRef.detectChanges();
    }
    get getSubmitLabel(): string {
        if (Object.keys(this.dialogData.element).length !== 0) {
            return 'Table.save';
        }
        return this.config.modal.submit.submitLabel;
    }
    get getModalTitle(): string {
        if (Object.keys(this.dialogData.element).length !== 0) {
            return this.config.modal.edit.titleLabel;
        }
        return this.config.modal.submit.titleLabel;
    }

    onScrollContainer(): void {
        if (this.containerElement) {
            const element = this.containerElement.nativeElement;
            this.scrollable = element.scrollTop !== 0;
        } else {
            this.scrollable = false;
        }
    }

    onCancel(): void {
        this.dialogRef.close({ event: 'Cancel' });
    }

    onDelete(): void {
        this.dialogRef.close({
            event: this.action,
            data: this.dialogGroup.value,
        });
    }

    onSubmit(): void {
        if (this.dialogGroup.valid) {
            this.dialogRef.close({
                event: this.action,
                data: this.dialogGroup.controls[this.config.id].value,
            });
        }
        this.dialogGroup.markAllAsTouched();
    }
}
