import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditComponent } from './pages/add-edit/add-edit.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
  {
    path: 'client-search',
    component: SearchComponent,
    data: { title: 'Client Search', subtitle: 'Search Your Clients' }
  },
  {
    path: 'client-list',
    component: ListComponent,
    data: { title: 'Client List', subtitle: 'Your Clients' }
  },
  {
    path: 'client-add-edit',
    component: AddEditComponent
  },
  {
    path: 'client-dashboard',
    component: DashboardComponent,
    data: { title: 'Dashboard', subtitle: 'Your Dashboard' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
