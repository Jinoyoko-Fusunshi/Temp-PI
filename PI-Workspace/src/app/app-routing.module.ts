import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SensorsViewComponent} from "./views/sensors-view/sensors-view.component";
import {HomeComponent} from "./views/home/home.component";

const routes: Routes = [
  { path: 'views/sensors-view', component: SensorsViewComponent },
  { path: '/', component: HomeComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
