import { FormBuilder, FormGroup } from "@angular/forms";


export class CheckboxElementModel {
    constructor(private formBuilder: FormBuilder) {
    }

    profileForm: FormGroup = this.formBuilder.group({
        key: [''],
        type: ['checkbox'], // Specify the field type as 'checkbox'
        templateOptions: this.formBuilder.group({
            label: [''],
            description: [''],
            required: [''],
            hideLabel: [false],
            hideRequiredMarker: [false],
            indeterminate: [false],
            // disabled: [false],
            readonly: [false],
        })
    });
}
