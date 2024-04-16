import { Component, Input } from "@angular/core"
import { FormArray, FormBuilder, FormGroup } from "@angular/forms"
import { element } from "protractor";
import { IConfigElement } from "../config-element.interface";
@Component({
    selector: 'select-element',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.css']
})
export class SelectComponent implements IConfigElement {
    @Input()
    form: FormGroup;
    inputTypes: string[] = ['text', 'password', 'checkbox', 'radio', 'number', 'email', 'tel', 'url', 'date', 'time', 'datetime-local', 'month', 'week', 'color', 'range', 'file', 'hidden'];
    constructor(private formBuilder:FormBuilder) {
    }
    // onSubmit() {
    //     console.log(this.form.value);
    // }
    showAddOptionDialog: boolean = false;
    newOptionLabel: string;
    newOptionValue: string;
    isOptionDisabled: boolean = false;
    updateIndex = -1;
    openAddOptionDialog() {
        this.showAddOptionDialog = true;
    }

    addOption() {
        const optionsArray = this.form.get('templateOptions.options') as FormArray;
        optionsArray.push(this.formBuilder.group({
            label: [this.newOptionLabel],
            value: [this.newOptionValue],
            disabled: [this.isOptionDisabled]
        }));
        this.resetDialog();
    }

    cancelAddOption() {
        this.resetDialog();
    }

    removeOption(index: number) {
        const optionsArray = this.form.get('templateOptions.options') as FormArray;
        optionsArray.removeAt(index);
    }

    editOption(index: number) {
        this.openAddOptionDialog();
        const optionsArray = this.form.get('templateOptions.options') as FormArray;

        // Update the values of the selected option in the form array
        this.newOptionLabel = optionsArray.at(index).get('label').value;
        this.newOptionValue = optionsArray.at(index).get('value').value;
        this.isOptionDisabled = optionsArray.at(index).get('disabled').value;
        this.updateIndex = index;
    }
    updateOption() {
        this.openAddOptionDialog();
        const optionsArray = this.form.get('templateOptions.options') as FormArray;

        // Update the values of the selected option in the form array
        optionsArray.at(this.updateIndex).get('label').setValue(this.newOptionLabel);
        optionsArray.at(this.updateIndex).get('value').setValue(this.newOptionValue);
        optionsArray.at(this.updateIndex).get('disabled').setValue(this.isOptionDisabled);

        this.resetDialog();
    }

    private resetDialog() {
        this.showAddOptionDialog = false;
        this.newOptionLabel = '';
        this.newOptionValue = '';
        this.isOptionDisabled = false;
        this.updateIndex = -1;
    }
}