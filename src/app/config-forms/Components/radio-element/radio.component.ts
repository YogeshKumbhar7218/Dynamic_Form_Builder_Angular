import { Component, Input } from "@angular/core"
import { FormArray, FormBuilder, FormGroup } from "@angular/forms"
import { element } from "protractor";
import { IConfigElement } from "../config-element.interface";
@Component({
    selector: 'radio-element',
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.css']
})
export class RadioComponent implements IConfigElement {
    @Input()
    form: FormGroup;
    formBuilder: FormBuilder = new FormBuilder();
    constructor() {
    }
    onSubmit() {
        console.log(this.form.value);
    }

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
