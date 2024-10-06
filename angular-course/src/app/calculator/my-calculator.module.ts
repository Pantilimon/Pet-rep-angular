import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCalculatorComponent } from './components/my-calculator/my-calculator.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [MyCalculatorComponent],
  declarations: [MyCalculatorComponent],
})
export class MyCalculatorModule { }
