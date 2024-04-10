import { Component, Input } from "@angular/core"
import { FormGroup } from "@angular/forms"
import { element } from "protractor";
import { IConfigElement } from "../config-element.interface";
@Component({
    selector: 'input-element',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})
export class InputComponent implements IConfigElement {
    @Input()
    form: FormGroup;
// color
// date
// datetime-local
// email
// month
// number
// password
// search
// tel
// text
// time
// url
// week
    inputTypes: any[] = [
        { label: 'Text', value: 'text' },
        { label: 'Password', value: 'password' },
        { label: 'Number', value: 'number' },
        { label: 'Email', value: 'email' },
        { label: 'Telephone', value: 'tel' },
        { label: 'URL', value: 'url' },
        { label: 'Date', value: 'date' },
        { label: 'Time', value: 'time' },
        { label: 'Datetime Local', value: 'datetime-local' },
        { label: 'Month', value: 'month' },
        { label: 'Week', value: 'week' },
        { label: 'Color', value: 'color' },
        // { label: 'File', value: 'file' },

    ];
    onSubmit() {
        console.log(this.form.value);
    }
}