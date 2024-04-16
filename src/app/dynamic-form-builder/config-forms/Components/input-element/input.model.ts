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
            description: [''],
            required: [''],
            type: [''],
            min: [''],    //number                       
            max: [''],    //number                    
            minLength: [''],      //text, password, number, telephone ,email             
            maxLength: [''],      //text, password, number, telephone ,email           
            pattern: [''],        //text, password, email ,telephone, number                
            readonly: [''],
            attributes: this.formBuilder.group({
                spellcheck: [''],
            })                  //text
        })
    });

}
