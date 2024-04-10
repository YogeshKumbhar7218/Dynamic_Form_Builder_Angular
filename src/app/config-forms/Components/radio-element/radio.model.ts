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

        // Generate options dynamically
        // this.generateOptions();
    }

    // generateOptions() {
    //     // Define your dynamic options here
    //     const dynamicOptions = [
    //         { label: 'Option 1', value: 'option1' },
    //         { label: 'Option 2', value: 'option2' },
    //         // Add more options as needed
    //     ];

    //     // Get a reference to the options FormArray
    //     const optionsArray = this.profileForm.get('templateOptions.options') as FormArray;

    //     // Remove existing options
    //     while (optionsArray.length) {
    //         optionsArray.removeAt(0);
    //     }

    //     // Add dynamic options to the form array
    //     dynamicOptions.forEach(option => {
    //         optionsArray.push(this.formBuilder.group({
    //             label: [option.label],
    //             value: [option.value],
    //         }));
    //     });
    // }
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
