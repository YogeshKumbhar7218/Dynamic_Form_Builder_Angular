import { FormBuilder, FormGroup, Validators } from "@angular/forms";


export class TextareaElementModel {
    constructor(private formBuilder: FormBuilder) {
    }

    profileForm: FormGroup = this.formBuilder.group({
        key: ['', Validators.required],
        type: ['textarea'], // Specify the field type as 'textarea'
        templateOptions: this.formBuilder.group({
            label: [''],
            placeholder: [''],
            required: [''],
            minLength: [''],
            maxLength: [''],
            description: [''],
            readonly: [''],
        })
    });

}
