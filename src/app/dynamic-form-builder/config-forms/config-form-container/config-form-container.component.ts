import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, Input, Type, ViewChild, ViewContainerRef } from "@angular/core"

import { Form, FormGroup } from "@angular/forms"
import { IConfigElement } from "../Components/config-element.interface";

@Component({
    selector: 'config-form',
    templateUrl: './config-form-container.component.html',
    styleUrls: ['./config-form-container.component.css']
})
export class ConfigFormContainer implements AfterViewInit {
    // supportedDynamicComponents = {
    //     'InputComponent': InputComponent,

    // };

    @Input()
    form: FormGroup;
    @Input()
    type: Type<IConfigElement>;
    @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

    constructor(private cd: ChangeDetectorRef, private componentFactoryResolver: ComponentFactoryResolver) {

    }
    ngAfterViewInit(): void {
        // Resolve the component factory for the dynamic component
        if (this.type) {
            const componentFactory = this.componentFactoryResolver
                .resolveComponentFactory<IConfigElement>(this.type);
            const componentRef = this.container.createComponent(componentFactory);
            componentRef.instance.form = this.form;
            this.cd.detectChanges();
        }
    }
    // getComponentByType(type: string): any {
    //     return this.supportedDynamicComponents[type];
    // }



}