import { Injectable } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class FormlyConverterService {

    constructor() { }

    convertToFormlyConfig(formGroup: FormGroup): any {
        const formlyConfig: any = {
            key: formGroup.get('key').value,
            type: formGroup.get('type').value,
            templateOptions: {}
        };

        const templateOptionsGroup = formGroup.get('templateOptions') as FormGroup;

        // Loop through the templateOptions keys and add them to formlyConfig if not empty
        Object.keys(templateOptionsGroup.controls).forEach(key => {
            const control = templateOptionsGroup.get(key) as AbstractControl;
            const value = control.value;
            if (value !== null && value !== undefined && value !== '') {
                formlyConfig.templateOptions[key] = value;
            }
        });

        // Loop through the attributes keys and add them to templateOptions.attributes if not empty
        const attributesGroup = templateOptionsGroup.get('attributes') as FormGroup;
        if (attributesGroup) {
            const attributes = {};
            Object.keys(attributesGroup.controls).forEach(key => {
                const control = attributesGroup.get(key) as AbstractControl;
                const value = control.value;
                if (value !== null && value !== undefined && value !== '') {
                    attributes[key] = value;
                }
            });

            if (Object.keys(attributes).length > 0) {
                formlyConfig.templateOptions.attributes = attributes;
            }
        }

        // Check if options exist in the formGroup
        const optionsGroup = formGroup.get('templateOptions.options') as FormGroup;
        if (optionsGroup) {
            const options = [];
            Object.keys(optionsGroup.controls).forEach(key => {
                const control = optionsGroup.get(key) as AbstractControl;
                const value = control.value as Array<any>;
                if (value !== null && value !== undefined && value.length > 0) {
                    value.forEach(element => {
                        options.push(element);
                    });;
                }
            });

            if (Object.keys(options).length > 0) {
                formlyConfig.templateOptions.options = options;
            }
        }

        const datepickerOptionsGroup = templateOptionsGroup.get('datepickerOptions') as FormGroup;
        if (datepickerOptionsGroup) {
            const attributes = {};
            Object.keys(datepickerOptionsGroup.controls).forEach(key => {
                const control = datepickerOptionsGroup.get(key) as AbstractControl;
                const value = control.value;
                if (value !== null && value !== undefined && value !== '') {
                    attributes[key] = value;
                }
            });

            if (Object.keys(attributes).length > 0) {
                formlyConfig.templateOptions.attributes = attributes;
            }
        }
        console.log("config object", formlyConfig);

        return formlyConfig;


    }
}
