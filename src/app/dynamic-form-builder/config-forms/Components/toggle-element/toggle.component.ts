import { Component, Input } from "@angular/core"
import { FormGroup } from "@angular/forms"
import { element } from "protractor";
import { IConfigElement } from "../config-element.interface";
@Component({
    selector: 'toggle-element',
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements IConfigElement {
    @Input()
    form: FormGroup;
    inputTypes: string[] = ['text', 'password', 'checkbox', 'radio', 'number', 'email', 'tel', 'url', 'date', 'time', 'datetime-local', 'month', 'week', 'color', 'range', 'file', 'hidden'];
    constructor() {
    }
    onSubmit() {
        console.log(this.form.value);
    }
}