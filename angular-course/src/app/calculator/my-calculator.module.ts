import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyCalculatorComponent } from './components/my-calculator/my-calculator.component';
import { MyCalculatorImprovedComponent } from './components/my-calculator-improved/my-calculator-improved.component';



@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [MyCalculatorImprovedComponent, MyCalculatorComponent],
  declarations: [MyCalculatorImprovedComponent, MyCalculatorComponent],
})
export class MyCalculatorModule { }
