import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCalculatorModule } from './calculator/my-calculator.module';
import { MyNavigation } from './components/navigation/navigation.component';
import { MyObjectListModule } from './object-list/my-object-list.module';
import { EmptyRouteComponent } from './components/empty-route/empty-route.component';
import { DirectivesModule } from './directives/directives.module';
import { LifeCycleModule } from './lifecycle/lifecycle.module';
import { RequestModule } from './request/request.module';
import { FormsModule } from './forms/forms.module';






@NgModule({
  declarations: [AppComponent, MyNavigation, EmptyRouteComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyCalculatorModule,
    MyObjectListModule,
    DirectivesModule,
    LifeCycleModule,
    RequestModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
