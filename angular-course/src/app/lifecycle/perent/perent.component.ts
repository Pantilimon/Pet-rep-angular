import { Component } from '@angular/core';

@Component({
  selector: 'perent-component',
  templateUrl: './perent.component.html',
  styleUrl: './perent.component.scss'
})
export class PerentComponent {
  public obJ: string = 'Наследство'

  public hadleEvent(ev: string): void {
    this.obJ = ev
  }
  
}
