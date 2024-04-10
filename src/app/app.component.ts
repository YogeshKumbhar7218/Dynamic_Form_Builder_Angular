// app.component.ts

import { Component, Type } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IConfigElement } from './config-forms/Components/config-element.interface';
import { InputComponent } from './config-forms/Components/input-element/input.component';
import { SelectComponent } from './config-forms/Components/select-element/select.component';
import { TextareaComponent } from './config-forms/Components/textarea-element/textarea.component';
import { CheckboxComponent } from './config-forms/Components/checkbox-element/checkbox.component';
import { RadioComponent } from './config-forms/Components/radio-element/radio.component';
import { DatepickerComponent } from './config-forms/Components/datepicker-element/datepicker.component';
// import { TimepickerComponent } from './config-forms/Components/timepicker-element/timepicker.component';
// import { SliderComponent } from './config-forms/Components/slider-element/slider.component';
import { ToggleComponent } from './config-forms/Components/toggle-element/toggle.component';
import { FileComponent } from './config-forms/Components/file-element/file.component';
// import { AutocompleteComponent } from './config-forms/Components/autocomplete-element/autocomplete.component';
// import { AutocompleteElementModel } from './config-forms/Components/autocomplete-element/autocomplete.model';
import { InputElementModel } from './config-forms/Components/input-element/input.model';
import { SelectElementModel } from './config-forms/Components/select-element/select.model';
import { TextareaElementModel } from './config-forms/Components/textarea-element/textarea.model';
import { CheckboxElementModel } from './config-forms/Components/checkbox-element/checkbox.model';
import { RadioElementModel } from './config-forms/Components/radio-element/radio.model';
import { DatepickerElementModel } from './config-forms/Components/datepicker-element/datepicker.model';
// import { TimepickerElementModel } from './config-forms/Components/timepicker-element/timepicker.model';
// import { SliderElementModel } from './config-forms/Components/slider-element/slider.model';
import { ToggleElementModel } from './config-forms/Components/toggle-element/toggle.model';
import { FileElementModel } from './config-forms/Components/file-element/file.model';
import { FormlyConverterService } from './service/FormlyConverterService';

interface FormElement {
  type: string;
  label: string;
  formComponent?: Type<IConfigElement>;
  formGroup?: FormGroup;

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fields: any[];
  previewForm: FormGroup = new FormGroup({});
  constructor(public formBuilder: FormBuilder, private formlyConverterService: FormlyConverterService) {
    // this.createForm();

  }
  typeMapping = {
    'input': InputComponent,
    'select': SelectComponent,
    'textarea': TextareaComponent,
    'checkbox': CheckboxComponent,
    'radio': RadioComponent,
    'datepicker': DatepickerComponent,
    // 'timepicker': TimepickerComponent,
    // 'slider': SliderComponent,
    'toggle': ToggleComponent,
    'file': FileComponent,
    // 'autocomplete': AutocompleteComponent
  }
  // formObjectMapping = {
  //   'input': InputElementModel,
  //   'select': SelectElementModel,
  //   'textarea': TextareaElementModel,
  //   'checkbox': CheckboxElementModel,
  //   'radio': RadioElementModel,
  //   'datepicker': DatepickerElementModel,
  //   'timepicker': TimepickerElementModel,
  //   'slider': SliderElementModel,
  //   'toggle': ToggleElementModel,
  //   'file': FileElementModel,
  //   'autocomplete': AutocompleteElementModel
  // }

  toolboxItems: FormElement[] = [
    { type: 'input', label: 'Input' },
    { type: 'textarea', label: 'Textarea' },
    { type: 'checkbox', label: 'Checkbox' },
    { type: 'radio', label: 'Radio' },
    { type: 'select', label: 'Select' },
    { type: 'datepicker', label: 'Datepicker' },
    // { type: 'timepicker', label: 'Timepicker' },
    // { type: 'slider', label: 'Slider' },
    { type: 'toggle', label: 'Switch' },
    { type: 'file', label: 'File Upload' },
    // { type: 'autocomplete', label: 'Autocomplete' },
    // Add more form field types here
  ];

  canvasItems: FormElement[] = [];

  addItem(type: string) {
    const element: FormElement = ({ ...this.toolboxItems.find(item => item.type === type) });
    console.log("addItem()=> element.price", element.type);
    element.formComponent = this.getComponentType(element.type);
    element.formGroup = this.getFormObjByType(element.type).profileForm;
    // element.formGroup = new InputElement(this.formBuilder).profileForm;
    this.canvasItems.push(element);
    // console.log(this.formlyConverterService.convertToFormlyConfig(element.formGroup));
  }
  getComponentType(type: string): Type<IConfigElement> {

    return this.typeMapping[type];
  }

  onDrop(event: CdkDragDrop<FormElement[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Copy the item from the toolbox to the canvas
      const itemCopy = { ...event.previousContainer.data[event.previousIndex] };
      itemCopy.formComponent = this.getComponentType(itemCopy.type);
      // itemCopy.formGroup = new InputElement(this.formBuilder).profileForm;
      itemCopy.formGroup = this.getFormObjByType(itemCopy.type).profileForm;
      this.canvasItems.splice(event.currentIndex, 0, itemCopy);
      console.log(this.formlyConverterService.convertToFormlyConfig(itemCopy.formGroup));

    }
    // Generate JSON configuration
    // this.generateJsonConfiguration();
  }
  toggleConfigForm(form) {
    if (form.hidden) {
      form.hidden = false;
      console.log("show", form.hidden);
      console.log(form);
    } else {
      form.hidden = true;
      console.log("hide", form.hidden);

    }
  }
  removeElement(element: FormElement) {
    let index = this.canvasItems.indexOf(element);
    this.canvasItems.splice(index, 1)
  }
  getFormObjByType(type: string) {
    // let formType: Type<IConfigFormModel> = this.getFormObjByType[type];
    // return (formType);

    switch (type) {
      case 'input':
        return (new InputElementModel(this.formBuilder))
      case 'select':
        return (new SelectElementModel(this.formBuilder))
      case 'textarea':
        return (new TextareaElementModel(this.formBuilder))
      case 'checkbox':
        return (new CheckboxElementModel(this.formBuilder))
      case 'radio':
        return (new RadioElementModel(this.formBuilder))
      case 'datepicker':
        return (new DatepickerElementModel(this.formBuilder))
      // case 'timepicker':
      //   return (new TimepickerElementModel(this.formBuilder))
      // case 'slider':
      //   return (new SliderElementModel(this.formBuilder))
      case 'toggle':
        return (new ToggleElementModel(this.formBuilder))
      case 'file':
        return (new FileElementModel(this.formBuilder))
      // case 'autocomplete':
      //   return (new AutocompleteElementModel(this.formBuilder))
    }
  }

  formPreview() {
    this.fields = [];
    this.canvasItems.forEach(item => {
      this.fields.push(
        this.formlyConverterService
          .convertToFormlyConfig(item.formGroup)
      );

    })
    console.log("Fields", this.fields)
  }
}



