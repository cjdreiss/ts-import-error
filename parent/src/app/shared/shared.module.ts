import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleComponent } from '../example/example.component';
/// <reference types="@angular/core" />
/// <reference types="@angular/common" />
/// <reference types="@angular/router" />
/// <reference types="@angular/forms" />
/// <reference types="rxjs" />

@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExampleComponent
  ]
})
export class SharedModule { }
