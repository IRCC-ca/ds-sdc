import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    IDatepickerConfig,
    IFormConfig,
    IListType,
    IStaticAutocompleteConfig,
} from '../IFormBase';
import { BaseFieldComponent } from '../jl-base-field';
import { ErrorNames } from '../validator-types';

interface DateItem {
    key: string;
    value: string;
}

const getYears = (MIN_YEAR: number, MAX_YEAR: number, useUnknown = false) => {
    const years: DateItem[] = [];

    if (useUnknown) {
        years.push({ key: '**', value: 'Unknown' });
    }

    for (let year = MIN_YEAR; year <= MAX_YEAR; year++) {
        years.push({
            key: year.toString(),
            value: year.toString(),
        });
    }
    return years;
};

const getDays = (useUnknown = false) => {
    const MIN_DAY = 1;
    const MAX_DAY = 31;
    const days: DateItem[] = [];

    if (useUnknown) {
        days.push({ key: '**', value: 'Unknown' });
    }

    for (let day = MIN_DAY; day <= MAX_DAY; day++) {
        days.push({
            key: ('00' + day).slice(-2).toString(),
            value: ('00' + day).slice(-2).toString(),
        });
    }
    return days;
};

@Component({
    selector: 'jlcl-datepicker',
    templateUrl: './jl-form-datepicker.component.html',
    styleUrls: ['./jl-form-datepicker.component.scss'],
})
export class DynDatepickerComponent
    extends BaseFieldComponent
    implements OnInit
{
    @Input()
    config!: IDatepickerConfig;
    ongoingConfig!: IFormConfig;
    years: DateItem[] = [];
    months: DateItem[] = [];
    days: DateItem[] = [];
    disabled = false;
    constructor(
        changeRef: ChangeDetectorRef,
    ) {
        super(changeRef);
    }

    ngOnInit(): void {
        this.years = getYears(
            this.config.minYear,
            this.config.maxYear,
            this.config.useUnknownForMonthAndDay
        );
        if (!this.config.useUnknownForMonthAndDay) {
            this.years = this.years.filter((year) => year.key !== '**');
        }
        if (!this.config.useUnknownForMonthAndDay) {
            this.months = this.months.filter((month) => month.key !== '**');
        }
        this.days = getDays(this.config.useUnknownForMonthAndDay);
        const validation = this.config.validation || [];
        this.config['childConfigs'] = [
            {
                id: 'year',
                type: 'staticAutocomplete',
                label: 'DatePicker.year',
                validation: [...validation],
                items: this.years,
                hideRequiredLabel: true,
                hideStar: true,
                forceKeypadOnMobile: true,
                placeholder: 'YYYY',
                hidden: this.config.hidden,
                disabled: () => this.disabled,
            } as IStaticAutocompleteConfig,
            {
                id: 'month',
                type: 'staticAutocomplete',
                label: 'DatePicker.month',
                validation: [...validation],
                items: this.months,
                hideRequiredLabel: true,
                hideStar: true,
                placeholder: 'MM',
                hidden: this.config.hidden,
                disabled: () => this.disabled,
            } as IStaticAutocompleteConfig,
        ];
        if (!this.config.hiddenDay) {
            this.config['childConfigs'].push({
                id: 'day',
                type: 'staticAutocomplete',
                label: 'DatePicker.day',
                validation: [...validation],
                items: this.days,
                hideRequiredLabel: true,
                hideStar: true,
                forceKeypadOnMobile: true,
                numeric: true,
                placeholder: 'DD',
                hidden: this.config.hidden,
                disabled: () => this.disabled,
            } as IStaticAutocompleteConfig);
        }
        if (this.config.ongoing) {
            this.config['childConfigs'].push({
                id: 'ongoing',
                subText: 'DatePicker.Ongoing',
                type: 'checkbox',
            });
        }
        super.ngOnInit();

        this.yearControl?.valueChanges.subscribe((value) => {
            if (this.config.useUnknownForMonthAndDay) {
                if (value === '**') {
                    this.monthControl?.disable();
                    this.monthControl?.setValue('**');
                } else {
                    if (!this.localGroup.disabled) {
                        if (
                            this.config.hidden === undefined ||
                            (this.config.hidden &&
                                this.config.hidden(this.group) === false)
                        ) {
                            this.monthControl?.enable();
                        }
                    }
                }
            }

            if (this.config.useMaxDateAsToday) {
                if (this.userSelectedCurrentYear()) {
                    this.monthConfig.items = this.getCurrentYearMonths();
                    this.monthControl?.updateValueAndValidity();

                    if (this.userSelectedCurrentMonth()) {
                        this.dayConfig.items = this.getCurrentMonthDays();
                        this.dayControl?.updateValueAndValidity();
                    }
                } else {
                    this.monthConfig.items = this.months;
                    this.monthControl?.updateValueAndValidity();
                }
            }
            if (this.config.useMinDayAs) {
                if (this.userSelectedCurrentYear()) {
                    this.monthConfig.items = this.getMinCurrentYearMonths();
                    this.monthControl?.updateValueAndValidity();

                    if (this.userSelectedCurrentMonth()) {
                        this.dayConfig.items = this.getMinCurrentMonthDays(
                            this.config.useMinDayAs
                        );
                        this.dayControl?.updateValueAndValidity();
                    }
                } else {
                    this.monthConfig.items = this.months;
                    this.monthControl?.updateValueAndValidity();
                }
            }
            if (this.config.useMaxDayAs) {
                if (this.userSelectedCurrentYear()) {
                    this.monthConfig.items = this.getMaxCurrentYearMonths();
                    this.monthControl?.updateValueAndValidity();

                    if (this.userSelectedCurrentMonth()) {
                        this.dayConfig.items = this.getMaxCurrentMonthDays(
                            this.config.useMaxDayAs
                        );
                        this.dayControl?.updateValueAndValidity();
                    }
                } else {
                    this.monthConfig.items = this.months;
                    this.monthControl?.updateValueAndValidity();
                }
            }
            if (!this.config.hiddenDay) {
                this.dayConfig.items = this.getDaysByMonth();
                this.dayControl?.updateValueAndValidity();
            }
        });

        this.monthControl?.valueChanges.subscribe((value) => {
            if (!this.config.hiddenDay) {
                this.dayConfig.items = this.getDaysByMonth();

                if (this.config.useUnknownForMonthAndDay) {
                    if (value === '**') {
                        this.dayControl?.disable();
                        this.dayControl?.setValue('**');
                    } else {
                        if (!this.localGroup.disabled) {
                            if (
                                this.config.hidden === undefined ||
                                (this.config.hidden &&
                                    this.config.hidden(this.group) === false)
                            ) {
                                this.dayControl?.enable();
                            }
                        }
                    }
                }
            }

            if (this.config.useMaxDateAsToday) {
                if (
                    this.userSelectedCurrentYear() &&
                    this.userSelectedCurrentMonth()
                ) {
                    this.dayConfig.items = this.getCurrentMonthDays();
                }
            }
            if (this.config.useMinDayAs) {
                if (
                    this.userSelectedCurrentYear() &&
                    this.userSelectedCurrentMonth()
                ) {
                    this.dayConfig.items = this.getMinCurrentMonthDays(
                        this.config.useMinDayAs
                    );
                }
            }
            if (this.config.useMaxDayAs) {
                if (
                    this.userSelectedCurrentYear() &&
                    this.userSelectedCurrentMonth()
                ) {
                    this.dayConfig.items = this.getMaxCurrentMonthDays(
                        this.config.useMaxDayAs
                    );
                }
            }

            this.dayControl?.updateValueAndValidity();
        });
        if (this.config.comparedWithId) {
            this.onFormValueChange();
        }
    }

    onFormValueChange(): void {
        this.group.valueChanges.subscribe((val) => {
            this.compareDatesValidation(val);
        });
    }


    private userSelectedCurrentYear(): boolean {
        const today = new Date();
        return this.yearControl?.value === today.getFullYear().toString();
    }

    private userSelectedCurrentMonth(): boolean {
        const today = new Date();
        return (
            this.monthControl?.value === this.padTwoZeros(today.getMonth() + 1)
        );
    }

    get yearControl() {
        return this.localGroup.get('year');
    }

    get monthControl() {
        return this.localGroup.get('month');
    }

    get dayControl() {
        return this.localGroup.get('day');
    }

    get dayConfig() {
        return this.config['childConfigs']?.find(
            (config) => config.id === 'day'
        ) as IListType;
    }

    get monthConfig() {
        return this.config['childConfigs']?.find(
            (config) => config.id === 'month'
        ) as IListType;
    }

    private isLeapYear(year: number): boolean {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    private getCurrentYearMonths(): DateItem[] {
        const currentMonth = new Date().getMonth() + 1;
        return this.months.filter(
            (month) =>
                !!parseInt(month.key) && parseInt(month.key) <= currentMonth
        );
    }

    private getMinCurrentYearMonths(): DateItem[] {
        const currentMonth = new Date().getMonth() + 1;
        return this.months.filter(
            (month) =>
                !!parseInt(month.key) && parseInt(month.key) >= currentMonth
        );
    }

    private getMaxCurrentYearMonths(): DateItem[] {
        const currentMonth = new Date().getMonth() + 1;
        return this.months.filter(
            (month) =>
                !!parseInt(month.key) && parseInt(month.key) <= currentMonth
        );
    }

    private padTwoZeros(value: number) {
        return ('00' + value).slice(-2).toString();
    }

    private getCurrentMonthDays(): DateItem[] {
        const currentDay = new Date().getDate();
        return this.getDaysByMonth().filter(
            (day) => !!parseInt(day.key) && parseInt(day.key) <= currentDay
        );
    }

    private getMinCurrentMonthDays(date: number): DateItem[] {
        return this.getDaysByMonth().filter(
            (day) => !!parseInt(day.key) && parseInt(day.key) >= date
        );
    }

    private getMaxCurrentMonthDays(date: number): DateItem[] {
        return this.getDaysByMonth().filter(
            (day) => !!parseInt(day.key) && parseInt(day.key) <= date
        );
    }

    private getDaysByMonth(): DateItem[] {
        const monthValue = this.monthControl?.value;
        const year = this.yearControl?.value;
        let dayCount = '30';
        let isMonthValueCorrect = false;
        if (monthValue === '**') {
            isMonthValueCorrect = true;
            return this.days.filter((day) => day.key === '**');
        } else if (monthValue === '02') {
            isMonthValueCorrect = true;
            if (this.isLeapYear(parseInt(year))) {
                dayCount = '29';
            } else {
                dayCount = '28';
            }
        } else if (
            ['01', '03', '05', '07', '08', '10', '12'].includes(monthValue)
        ) {
            isMonthValueCorrect = true;
            dayCount = '31';
        }

        if (
            !isMonthValueCorrect &&
            !['04', '06', '09', '11'].includes(monthValue)
        ) {
            dayCount = '**';
        }
        return this.days.filter(
            (day) =>
                day.key === '**' || parseInt(day.value) <= parseInt(dayCount)
        );
    }

    private checkOrPatchDateValue(val: string): string {
        if (val === '**' || val === undefined) {
            return '01';
        }
        return val;
    }

    private dateTimeConverter(val: any): Date {
        return new Date(
            val.year +
                '-' +
                this.checkOrPatchDateValue(val.month) +
                '-' +
                this.checkOrPatchDateValue(val.day)
        );
    }
    private compareDatesValidation(val: any): void {
        this.disabled = val[this.config.id]?.ongoing || false;
        if (
            !this.disabled &&
            this.config.comparedWithId &&
            val[this.config.id] &&
            val[this.config.id].year &&
            val[this.config.comparedWithId] &&
            val[this.config.comparedWithId].year
        ) {
            const fromDate = this.dateTimeConverter(
                val[this.config.comparedWithId]
            );
            const toDate = this.dateTimeConverter(val[this.config.id]);
            const controls = (this.group.controls[this.config.id] as FormGroup)
                .controls;
            Object.keys(controls).forEach((key: string) => {
                const isValidToDate = fromDate < toDate;
                let displayError;
                if (this.config.useMaxDateAsToday) {
                    const isValidMaxToDateAsToday =
                        this.config.useMaxDateAsToday &&
                        toDate < new Date() &&
                        isValidToDate;
                    displayError =
                        key !== 'ongoing' && !isValidMaxToDateAsToday
                            ? {
                                  [ErrorNames.invalid]: {},
                              }
                            : null;
                }
                if (this.config.useMinDayAs) {
                    const isValidMinToDateAsToday =
                        this.config.useMinDayAs &&
                        toDate > new Date() &&
                        isValidToDate;
                    displayError =
                        key !== 'ongoing' && !isValidMinToDateAsToday
                            ? {
                                  [ErrorNames.invalid]: {},
                              }
                            : null;
                }
                if (this.config.useMaxDayAs) {
                    const isValidMaxToDateAsToday =
                        this.config.useMaxDayAs &&
                        toDate < new Date() &&
                        isValidToDate;
                    displayError =
                        key !== 'ongoing' && !isValidMaxToDateAsToday
                            ? {
                                  [ErrorNames.invalid]: {},
                              }
                            : null;
                }
                if (this.config.maxYear) {
                    const d = new Date();
                    d.setFullYear(this.config.maxYear);
                    const isValidMaxYearToDateAsToday =
                        this.config.maxYear && toDate < d && isValidToDate;

                    displayError =
                        key !== 'ongoing' && !isValidMaxYearToDateAsToday
                            ? {
                                  [ErrorNames.invalid]: {},
                              }
                            : null;
                }
                if (!displayError) {
                    displayError =
                        key !== 'ongoing' && !isValidToDate
                            ? {
                                  [ErrorNames.invalid]: {},
                              }
                            : null;
                }
                controls[key].setErrors(displayError);
            });
        }
    }
}
