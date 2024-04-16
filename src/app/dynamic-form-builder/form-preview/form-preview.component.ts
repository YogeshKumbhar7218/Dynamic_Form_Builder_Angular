// form-preview.component.ts

import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'form-preview',
    templateUrl: './form-preview.component.html',
    styleUrls: ['./form-preview.component.css']
})
export class FormPreviewComponent {
    @Input() form: FormGroup;
    @Input() fields: any;
    constructor() { }
}
