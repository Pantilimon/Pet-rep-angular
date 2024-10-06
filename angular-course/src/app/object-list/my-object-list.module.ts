import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyObjectListComponent } from './components/my-object-list/my-object-list.component';
import { ItemObjectListComponent } from './components/item-object-list/item-object-list.component';
import { ObjectListRoutingModule } from './object-list-routing.module';



@NgModule({
  imports: [CommonModule, ObjectListRoutingModule],
  declarations: [MyObjectListComponent, ItemObjectListComponent],
  exports: [MyObjectListComponent, ItemObjectListComponent]
})
export class MyObjectListModule { }
