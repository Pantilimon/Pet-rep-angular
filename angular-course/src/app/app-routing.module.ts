import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCalculatorComponent } from './calculator/components/my-calculator/my-calculator.component';
import { EmptyRouteComponent } from './components/empty-route/empty-route.component';
import { ComponentWithDirectiveComponent } from './directives/components/component-with-directive/component-with-directive.component';
import { PerentComponent } from './lifecycle/perent/perent.component';
import { PostListComponent } from './request/components/post-list/post-list.component';
import { FormsComponent } from './forms/components/forms/forms.component';
import { WorkFormComponent } from './login-form/work-form/work-form.component';
import { MyNavigation } from './components/navigation/navigation.component';
import { MyCalculatorImprovedComponent } from './calculator/components/my-calculator-improved/my-calculator-improved.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: "full"
  },
  { 
    path: 'login',
    component: WorkFormComponent
  },
  {
    path: 'Calculator-improved',
    component: MyCalculatorImprovedComponent
  },
  {
    path: 'Calculator',
    component: MyCalculatorComponent
  },
  {
    path: 'object-list',
    loadChildren: () => import('./object-list/my-object-list.module').then(m => m.MyObjectListModule)
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
