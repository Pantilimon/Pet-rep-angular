import { Component } from '@angular/core';

interface VariablGroup{
  value: number,
  mod: CalcMod,
}
interface BinOp {
  first: VariablGroup;
  second: VariablGroup;
  operation: CalcOp;
}
enum CalcMod{
  none = 'none',
  square = "square",
  sin = 'sin',
  cos = 'cos'
}
enum CalcOp{
  plus = '+',
  minus = '-',
}
@Component({
  selector: 'calculator-improved',
  templateUrl: './my-calculator-improved.component.html',
  styleUrl: './my-calculator-improved.component.scss'
})


export class MyCalculatorImprovedComponent {
  public CalcMod = CalcMod
  public CalcOp = CalcOp
  public result?: number
  public CalcGroups: BinOp[] = [
    {
      first: {
      value: 5,
      mod: CalcMod.none,
    },
    second: {
      value: 5,
      mod: CalcMod.none,
    },
    operation: CalcOp.plus
    },
  ]
  public operationsBetweenGroups: CalcOp[] = []

  public addGroupp(): void {

    this.CalcGroups.push({
      first: {
      value: 0,
      mod: CalcMod.none,
    },
    second: {
      value: 0,
      mod: CalcMod.none,
    },
    operation: CalcOp.plus
    })
    this.operationsBetweenGroups.push(CalcOp.plus)
  }

  public removeGroup(index: number): void {
    this.CalcGroups.splice(index, 1)
  }

  public modOperations(groupVar: VariablGroup): number  {
    switch(groupVar.mod) {
      case "none":
        return(groupVar.value)
      case "square":
        return(groupVar.value ** 2)
      case "sin":
        return(Math.sin(groupVar.value))
      case "cos":
        return(Math.cos(groupVar.value))
      default:
        throw new Error(`Unknown mod type: ${groupVar.mod}`);
    }
  }

  public calc(): void {
    this.result = 0
    for (let i in this.CalcGroups) {
      let counter: number = 0
      switch(this.CalcGroups[i].operation) {
        case "+":

          counter = this.modOperations(this.CalcGroups[i].first) + this.modOperations(this.CalcGroups[i].second)
          break
        case "-":
          counter = this.CalcGroups[i].first.value - this.CalcGroups[i].second.value
          break
      }
      if (i == '0') {
        this.result = this.result + counter
      } else {
      let index: number = Number(i);
      switch(this.operationsBetweenGroups[index - 1]) {
        case "+":
          this.result = this.result + counter
          break
        case "-":
          this.result = this.result - counter
          break
        }
      }
      counter = 0
    }
  }
}