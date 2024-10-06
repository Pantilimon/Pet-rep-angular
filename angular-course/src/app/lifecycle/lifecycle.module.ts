import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerentComponent } from './perent/perent.component';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [PerentComponent, ChildComponent],
  imports: [
    CommonModule
  ],
  exports: [PerentComponent, ChildComponent]
})
export class LifeCycleModule { }
