import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeeRoutingModule } from './employee-routing.module';
import { AddEditComponent } from './pages/add-edit/add-edit.component';
import { ListComponent } from './pages/list/list.component';



@NgModule({
  declarations: [
    AddEditComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule
  ],
  entryComponents: [
    ListComponent,
    AddEditComponent
  ]
})
export class EmployeeModule { }
