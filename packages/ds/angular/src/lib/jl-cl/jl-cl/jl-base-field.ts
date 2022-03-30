import {
    ChangeDetectorRef,
    Component,
    Input,
    OnDestroy,
    OnInit,
    SimpleChanges
} from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { COMPONENT_TYPES, IField } from './dynamic-field.directive';
import { IConfig } from './IFormBase';
import { IValidator, VALIDATORS } from './validator';

@Component({
    template: ``,
})
export class BaseFieldComponent implements IField, OnInit, OnDestroy {
    @Input()
    config!: IConfig;
    @Input()
    group!: FormGroup;
    @Input()
    disabled = false;

    localGroup!: FormGroup;

    public get formControl(): AbstractControl {
        return this.group?.get(this.config.id) as AbstractControl;
    }

    public get isRequired(): boolean {
        return (
            this.config.validation?.find((validator: IValidator) => {
                return validator === VALIDATORS['required'];
            }) !== undefined
        );
    }
    constructor(protected changeRef: ChangeDetectorRef) {}

    ngOnDestroy(): void {
        this.group.removeControl(this.config.id);
    }

    ngOnInit(): void {
        const formTypes: (keyof typeof COMPONENT_TYPES)[] = [
            'form',
        ];
        if (formTypes.includes(this.config.type)) {
            const control = new FormGroup({});
            this.group.addControl(this.config.id, control);
            this.localGroup = control;
        } else {
            this.group.addControl(this.config.id, new FormControl());
            this.localGroup = this.group;
        }
        this.changeRef.detectChanges();
    }

    ngAfterViewChecked(): void {
        this.changeRef.detectChanges();
    }

    ngAfterViewInit(): void {
        if (this.disabled) {
            this.formControl.disable();
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('disabled' in changes) {
            if (this.disabled) {
                this.formControl.disable();
            } else {
                this.formControl.enable();
            }
        }
    }
}
