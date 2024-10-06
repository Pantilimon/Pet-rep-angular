import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDirectiveDirective } from './directive/my-directive.directive';
import { ComponentWithDirectiveComponent } from './components/component-with-directive/component-with-directive.component';



@NgModule({
  declarations: [
    MyDirectiveDirective,
    ComponentWithDirectiveComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [MyDirectiveDirective]
})
export class DirectivesModule { }
