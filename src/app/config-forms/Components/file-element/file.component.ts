import { Component, Input } from "@angular/core"
import { FormGroup } from "@angular/forms"
import { element } from "protractor";
import { IConfigElement } from "../config-element.interface";
@Component({
    selector: 'file-element',
    templateUrl: './file.component.html',
    styleUrls: ['./file.component.css']
})
export class FileComponent implements IConfigElement {
    @Input()
    form: FormGroup;
    inputTypes: string[] = ['text', 'password', 'checkbox', 'radio', 'number', 'email', 'tel', 'url', 'date', 'time', 'datetime-local', 'month', 'week', 'color', 'range', 'file', 'hidden'];
    constructor() {
    }
    onSubmit() {
        console.log(this.form.value);
    }
}