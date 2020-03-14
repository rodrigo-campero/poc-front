import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditComponent } from './pages/add-edit/add-edit.component';
import { ListComponent } from './pages/list/list.component';


export const routes: Routes = [
  {
    path: 'employee-list',
    component: ListComponent,
    data: { title: 'Employee List', subtitle: 'Your Employees' }
  },
  {
    path: 'employee-add-edit',
    component: AddEditComponent,
    data: { title: 'Employee Add Edit', subtitle: 'Modify Employee' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
