
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, UserComponent } from './components';

import { DetaliComponent } from "./components/pages/detali/detali.component";
import {AdminComponent} from "./components/pages/admin/admin.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'detali', component: DetaliComponent
  },
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'admin', component: AdminComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
