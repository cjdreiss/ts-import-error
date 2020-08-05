(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@cjdreiss/ts-import-error-parent', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.cjdreiss = global.cjdreiss || {}, global.cjdreiss['ts-import-error-parent'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    var ExampleComponent = /** @class */ (function () {
        function ExampleComponent() {
        }
        ExampleComponent.prototype.ngOnInit = function () {
        };
        return ExampleComponent;
    }());
    ExampleComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'parent-example',
                    template: "<p>example works!</p>\n<p>You passed in \" <strong>{{ test }}</strong> \"</p>\n",
                    styles: [""]
                },] }
    ];
    ExampleComponent.ctorParameters = function () { return []; };
    ExampleComponent.propDecorators = {
        test: [{ type: core.Input }]
    };

    /// <reference types="@angular/core" />
    /// <reference types="@angular/common" />
    /// <reference types="@angular/router" />
    /// <reference types="@angular/forms" />
    /// <reference types="rxjs" />
    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        return SharedModule;
    }());
    SharedModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        ExampleComponent
                    ],
                    imports: [
                        common.CommonModule
                    ],
                    exports: [
                        ExampleComponent
                    ]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ExampleComponent = ExampleComponent;
    exports.SharedModule = SharedModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cjdreiss-ts-import-error-parent.umd.js.map
