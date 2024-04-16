import { Component, ViewChild } from "@angular/core";
import { DynamicFormBuilderComponent } from "./dynamic-form-builder/dynamic-form-builder.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jsonFormList: { formName: string, value: string }[] = [
    {
      formName: 'form1',
      value: '[{"key":"","type":"input","templateOptions":{"label":"label","placeholder":"place holder for input","description":"des","required":true,"type":"email","minLength":3,"maxLength":5,"attributes":{"spellcheck":""}}}]'
    },
    {
      formName: 'form2',
      value: '[{"key":"","type":"input","templateOptions":{"label":"label","placeholder":"place holder for input","description":"des","required":true,"type":"email","minLength":3,"maxLength":5,"attributes":{"spellcheck":""}}},{"key":"","type":"checkbox","templateOptions":{"hideLabel":false,"hideRequiredMarker":false,"indeterminate":false,"readonly":false}}]'
    },
    {
      formName: 'form3',
      value: '[{"key":"","type":"input","templateOptions":{"label":"label","placeholder":"place holder for input","description":"des","required":true,"type":"email","minLength":3,"maxLength":5,"attributes":{"spellcheck":""}}},{"key":"","type":"textarea","templateOptions":{}},{"key":"","type":"checkbox","templateOptions":{"hideLabel":false,"hideRequiredMarker":false,"indeterminate":false,"readonly":false}}]'
    }
  ]
  @ViewChild(DynamicFormBuilderComponent) formBuilder: DynamicFormBuilderComponent;
  constructor() {

  }
  ngAfterViewInit() {
    // child is set

  }
  ngAfterContentInit() {
    // this.formBuilder.loadFormInCanvas(this.jsonFormList[0].value);
  }
  loadForm(index: any) {
    this.formBuilder.loadFormInCanvas(this.jsonFormList[index].value);
  }


}



