import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsRoutingModule } from './routing-forms.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './components/forms/forms.component';



@NgModule({
  declarations: [FormsComponent],
  exports: [FormsComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsRoutingModule,
  ]
})
export class FormsModule { }
