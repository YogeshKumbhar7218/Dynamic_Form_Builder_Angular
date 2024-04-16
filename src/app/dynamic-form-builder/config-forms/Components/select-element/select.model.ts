import { FormBuilder, FormGroup, Validators } from "@angular/forms";


export class SelectElementModel {
    constructor(private formBuilder: FormBuilder) {
    }

    profileForm = this.formBuilder.group({
        key: ['', Validators.required],
        type: ['select'],
        templateOptions: this.formBuilder.group({
            label: [''],
            placeholder: [''],
            description: [''],
            multiple: [''],
            selectAllOption: ['Select All'],
            required: [''],
            hideLabel: [false],
            hideRequiredMarker: [false],
            readonly: [false],
            options: this.formBuilder.array([]), // Initialize options array
            // Other properties...
        })
    });

}
