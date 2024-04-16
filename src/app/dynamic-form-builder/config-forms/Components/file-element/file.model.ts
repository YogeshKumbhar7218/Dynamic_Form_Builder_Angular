import { FormBuilder, FormGroup, Validators } from "@angular/forms";


export class FileElementModel {
    constructor(private formBuilder: FormBuilder) {
    }

    profileForm = this.formBuilder.group({
        key: [''],
        type: ['file'],
        templateOptions: this.formBuilder.group({
            label: [''],
            placeholder: [''],
            required: [''],                    
            description: [''],                    
            disabled: [''],                                         
        })
    });

}
