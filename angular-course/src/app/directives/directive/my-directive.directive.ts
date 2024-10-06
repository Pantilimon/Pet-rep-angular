import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[MyDirective]'
})
export class MyDirectiveDirective implements AfterViewInit{
  constructor(el: ElementRef) {
    this._el = el 
  }
  private _el: ElementRef;
  
  ngAfterViewInit(): void {
    this.changeColors(this._el)
  }
  // colors = ["red", "green", "blue"]
  @Input('MyDirective') colors!: string[]

  private changeColors(el: ElementRef):void {
    if (this.colors && this.colors.length != 0) {
      setInterval(() => {el.nativeElement.style.color = this.colors[Math.floor(Math.random() * this.colors.length)]}, 1000)
    }
  }

}
