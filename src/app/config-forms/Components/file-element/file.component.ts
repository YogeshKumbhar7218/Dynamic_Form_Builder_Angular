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
    constructor() {
    }
    onSubmit() {
        console.log(this.form.value);
    }
}