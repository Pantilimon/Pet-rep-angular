import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCalculatorComponent } from './calculator/components/my-calculator/my-calculator.component';
import { EmptyRouteComponent } from './components/empty-route/empty-route.component';
import { ComponentWithDirectiveComponent } from './directives/components/component-with-directive/component-with-directive.component';
import { PerentComponent } from './lifecycle/perent/perent.component';
import { PostListComponent } from './request/components/post-list/post-list.component';
import { FormsComponent } from './forms/components/forms/forms.component';


const routes: Routes = [
  {
    path: 'Calculator',
    component: MyCalculatorComponent
  },
  {
    path: 'object-list',
    loadChildren: () => import('./object-list/my-object-list.module').then(m => m.MyObjectListModule)
  },
  {
    path: '',
    redirectTo: 'Calculator',
    pathMatch: "full"
  },
  {
    path: 'diretvive',
    component: ComponentWithDirectiveComponent
  },
  {
    path: 'lifecycle',
    component: PerentComponent
  },
  {
    path: 'request',
    component: PostListComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: '**',
    component: EmptyRouteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
