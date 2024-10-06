import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyObjectListComponent } from './components/my-object-list/my-object-list.component';
import { ItemObjectListComponent } from './components/item-object-list/item-object-list.component';


const routes: Routes = [
  {
    path: '',
    component: MyObjectListComponent
  },
  {
    path: ':id',
    component: ItemObjectListComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObjectListRoutingModule { }
