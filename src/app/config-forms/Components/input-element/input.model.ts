import { FormBuilder, FormGroup, Validators } from "@angular/forms";


export class InputElementModel {
    constructor(private formBuilder: FormBuilder) {
    }

    profileForm = this.formBuilder.group({
        key: ['', Validators.required],
        type: ['input'],
        templateOptions: this.formBuilder.group({
            label: [''],
            placeholder: [''],
            required: [''],
            type: [''],                           // Specify input type (email)
            min: [''],                           // Minimum length of input
            max: [''],                           // Maximum length of input
            minLength: [''],                     // Minimum length of characters required
            maxLength: [''],                      // Maximum length of characters allowed
            pattern: [''],                        // Regular expression pattern for validation
            description: [''],                    // Description of the input field
            readonly: [''],                     // Whether the input field is readonly
            attributes: this.formBuilder.group({
                spellcheck: [''],
            })
        })
    });

}
