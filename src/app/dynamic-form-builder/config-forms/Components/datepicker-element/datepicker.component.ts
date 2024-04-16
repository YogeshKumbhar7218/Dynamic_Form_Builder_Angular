import { Component, Input } from "@angular/core"
import { FormGroup } from "@angular/forms"
import { element } from "protractor";
import { IConfigElement } from "../config-element.interface";
@Component({
    selector: 'datepicker-element',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements IConfigElement {
    @Input()
    form: FormGroup;
    supportedDateFormats = [
        'yyyy-MM-dd',
        'MM/dd/yyyy',
        'dd/MM/yyyy',
        'dd.MM.yyyy',
        'yyyy/MM/dd',
        'dd-MMM-yyyy',
        'MMM dd, yyyy',
        'EEEE, MMMM dd, yyyy',
        'yyyy-MM-dd HH:mm:ss',
        'yyyy-MM-ddTHH:mm:ss.SSSZ'
    ];
    constructor() {
    }
    onSubmit() {
        console.log(this.form.value);
    }
}