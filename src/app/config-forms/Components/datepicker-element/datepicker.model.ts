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

// export class TemplateOptions {
//     label: string;
//     placeholder: string;
//     required: boolean;
//     type: string;                           // Specify input type (email)
//     min: number;                            // Minimum length of input
//     max: number;                            // Maximum length of input
//     minLength: number;                      // Minimum length of characters required
//     maxLength: number;                      // Maximum length of characters allowed
//     pattern: RegExp;                        // Regular expression pattern for validation
//     description: string;                    // Description of the input field
//     disabled: boolean;                      // Whether the input field is disabled
//     readonly: boolean;                      // Whether the input field is readonly
//     autofocus: boolean;                     // Whether the input field should be autofocused
//     tabindex: number;                       // Tab index of the input field
//     attributes: Attributes = new Attributes();
// }
// export class Attributes {
//     autocomplete: string;
//     spellcheck: boolean;
// }







// export class InputElementModel {
//     key: string = '';
//     type: string = 'input';
//     templateOptions: TemplateOptions = new TemplateOptions();
// }
// export class TemplateOptions {
//     label: string = 'Email Address';
//     placeholder: string = 'Enter your email';
//     required: boolean = true;
//     type: string = 'email';                                      // Specify input type (email)
//     min: number = 6;                                              // Minimum length of input
//     max: number = 100;                                            // Maximum length of input
//     minLength: number = 6;                                        // Minimum length of characters required
//     maxLength: number = 100;                                      // Maximum length of characters allowed
//     pattern: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/; // Regular expression pattern for validation
//     description: string = 'Please enter a valid email address.';  // Description of the input field
//     disabled: boolean = false;                                    // Whether the input field is disabled
//     readonly: boolean = false;                                    // Whether the input field is readonly
//     autofocus: boolean = true;                                    // Whether the input field should be autofocused
//     tabindex: number = 1;                                         // Tab index of the input field
//     attributes: Attributes = new Attributes();
// }
// export class Attributes {
//     autocomplete: string = 'on';
//     spellcheck: boolean = true;
// }
