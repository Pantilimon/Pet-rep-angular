import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'child-component',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit{
  @Input() title?: string

  @Output() eventChanger = new EventEmitter<string>()

  public tempTitle?: string

  public cliclHandler(): void {
    this.eventChanger.emit('Сообщение от ребенка')
  }
  
  ngOnInit(): void {
    this.tempTitle = this.title
  }
}
