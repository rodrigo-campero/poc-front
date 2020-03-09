import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditComponent } from './pages/add-edit/add-edit.component';
import { ListComponent } from './pages/list/list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


export const routes: Routes = [
  // { path: '', component: ListComponent },
  { path: 'client-list', component: ListComponent },
  { path: 'client-add-edit', component: AddEditComponent },
  { path: 'client-dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }