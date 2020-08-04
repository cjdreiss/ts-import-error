import { Component, Input } from '@angular/core';
export class ExampleComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2V4YW1wbGUvZXhhbXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLGdCQUFnQjtJQUUzQixnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLDJGQUF1Qzs7YUFFeEM7Ozs7bUJBRUUsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYXJlbnQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9leGFtcGxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhhbXBsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEV4YW1wbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0ZXN0OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIl19