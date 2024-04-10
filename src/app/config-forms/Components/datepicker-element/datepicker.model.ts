import { FormBuilder, FormGroup, Validators } from "@angular/forms";


export class DatepickerElementModel {
    constructor(private formBuilder: FormBuilder) {
    }

    profileForm = this.formBuilder.group({
        key: ['', Validators.required],
        type: ['datepicker'],
        templateOptions: this.formBuilder.group({
            label: [''],
            placeholder: [''],
            description: [''],                    // Description of the input field
            // format: ['dd-mm-yyyy'],
            // datepickerPopup: ['dd-MMMM-yyyy'],
            required: [''],                        // Regular expression pattern for validation
            disabled: [''],                      // Whether the input field is disabled
            readonly: [''],
            datepickerPopup: 'dd-MMMM-yyyy',
            datepickerOptions: this.formBuilder.group({
                format: 'dd-MMMM-yyyy'
            })// Whether the input field is readon
        })
    });

}
