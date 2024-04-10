import { FormBuilder, FormGroup, Validators } from "@angular/forms";


export class ToggleElementModel {
    constructor(private formBuilder: FormBuilder) {
    }

    profileForm = this.formBuilder.group({
        key: ['', Validators.required],
        type: ['toggle'],
        templateOptions: this.formBuilder.group({
            label: [''],
            placeholder: [''],
            required: [''],
            description: [''],
            disabled: [''],
            readonly: [''],
            hideLabel: [false],
            hideRequiredMarker: [false],
        })
    });

}

