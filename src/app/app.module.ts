import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormPreviewComponent } from './dynamic-form-builder/form-preview/form-preview.component';

import { ConfigFormContainer } from './dynamic-form-builder/config-forms/config-form-container/config-form-container.component';
import { InputComponent } from './dynamic-form-builder/config-forms/Components/input-element/input.component';
// import { AutocompleteComponent } from './config-forms/Components/autocomplete-element/autocomplete.component';
import { CheckboxComponent } from './dynamic-form-builder/config-forms/Components/checkbox-element/checkbox.component';
import { DatepickerComponent } from './dynamic-form-builder/config-forms/Components/datepicker-element/datepicker.component';
import { FileComponent } from './dynamic-form-builder/config-forms/Components/file-element/file.component';
import { RadioComponent } from './dynamic-form-builder/config-forms/Components/radio-element/radio.component';
import { SelectComponent } from './dynamic-form-builder/config-forms/Components/select-element/select.component';
// import { SliderComponent } from './config-forms/Components/slider-element/slider.component';
import { TextareaComponent } from './dynamic-form-builder/config-forms/Components/textarea-element/textarea.component';
// import { TimepickerComponent } from './config-forms/Components/timepicker-element/timepicker.component';
import { ToggleComponent } from './dynamic-form-builder/config-forms/Components/toggle-element/toggle.component';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { MatAutocompleteModule, MatNativeDateModule } from '@angular/material';
import { FormlyMatTextAreaModule } from '@ngx-formly/material/textarea';
// import { FormlyMatSliderModule } from '@ngx-formly/material/slider';
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';
import { HAMMER_LOADER } from '@angular/platform-browser';
import { FileValueAccessor } from './dynamic-form-builder/formly-custom-types/file/file-value-accessor';
import { FormlyFieldFile } from './dynamic-form-builder/formly-custom-types/file/file-type.component';
import { DynamicFormBuilderComponent } from './dynamic-form-builder/dynamic-form-builder.component';







@NgModule({
  declarations: [
    AppComponent,
    FormPreviewComponent,
    ConfigFormContainer,
    InputComponent,
    // AutocompleteComponent,
    CheckboxComponent,
    DatepickerComponent,
    FileComponent,
    RadioComponent,
    SelectComponent,
    // SliderComponent,
    TextareaComponent,
    // TimepickerComponent,
    ToggleComponent,
    FileValueAccessor,
    FormlyFieldFile,
    DynamicFormBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'file', component: FormlyFieldFile, wrappers: ['form-field'] },
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
    FormlyMaterialModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormlyMatDatepickerModule,
    MatNativeDateModule,
    FormlyMatTextAreaModule,
    // FormlyMatSliderModule,
    FormlyMatToggleModule,
    MatAutocompleteModule,

  ],
  providers: [{ provide: HAMMER_LOADER, useValue: () => new Promise(() => { }) }],
  bootstrap: [AppComponent],
  entryComponents: [
    InputComponent,
    // AutocompleteComponent,
    CheckboxComponent,
    DatepickerComponent,
    FileComponent,
    RadioComponent,
    SelectComponent,
    // SliderComponent,
    TextareaComponent,
    // TimepickerComponent,
    ToggleComponent]
})
export class AppModule { }
