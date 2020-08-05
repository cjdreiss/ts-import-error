import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class ExampleComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExampleComponent.decorators = [
    { type: Component, args: [{
                selector: 'parent-example',
                template: "<p>example works!</p>\n<p>You passed in \" <strong>{{ test }}</strong> \"</p>\n",
                styles: [""]
            },] }
];
ExampleComponent.ctorParameters = () => [];
ExampleComponent.propDecorators = {
    test: [{ type: Input }]
};

/// <reference types="@angular/core" />
/// <reference types="@angular/common" />
/// <reference types="@angular/router" />
/// <reference types="@angular/forms" />
/// <reference types="rxjs" />
class SharedModule {
}
SharedModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ExampleComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    ExampleComponent
                ]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { ExampleComponent, SharedModule };
//# sourceMappingURL=cjdreiss-ts-import-error-parent.js.map
