import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";


export class RadioElementModel {
    profileForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.profileForm = this.formBuilder.group({
            key: [''],
            type: ['radio'],
            templateOptions: this.formBuilder.group({
                label: [''],
                description: [''],
                required: [''],
                hideLabel: [false],
                hideRequiredMarker: [false],
                readonly: [false],
                options: this.formBuilder.array([]), // Initialize options array
                // Other properties...
            })
        });
    }

}
