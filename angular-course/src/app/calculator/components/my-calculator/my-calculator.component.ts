import { Component } from '@angular/core';

@Component({
  selector: 'my-calculator',
  templateUrl: './my-calculator.component.html',
  styleUrl: './my-calculator.component.scss'
})
export class MyCalculatorComponent {
 public first: number = 0
 public second: number = 0
 public operation: string = '+'
 public operations: string[] = ['+', '-']
 public calc(): void {
  switch (this.operation) {
    case "+":
      console.log("Понедельник");
      break;
    case "-":
      console.log("Вторник");
      break;
    }
  }
}
