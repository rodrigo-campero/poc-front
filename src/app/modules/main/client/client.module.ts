import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ListComponent } from './pages/list/list.component';
import { AddEditComponent } from './pages/add-edit/add-edit.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularMaterialModule } from 'src/app/fw/angular-material/angular-material.module';


@NgModule({
  declarations: [
    ListComponent,
    AddEditComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    AngularMaterialModule
  ],
  entryComponents: [
    ListComponent,
    AddEditComponent,
    DashboardComponent
  ]
})
export class ClientModule { }
