import { Component, Input } from "@angular/core"
import { FormGroup } from "@angular/forms"
import { element } from "protractor";
import { IConfigElement } from "../config-element.interface";
@Component({
    selector: 'checkbox-element',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements IConfigElement {
    @Input()
    form: FormGroup;
    constructor() {
    }
    onSubmit() {
        console.log(this.form.value);
    }
}