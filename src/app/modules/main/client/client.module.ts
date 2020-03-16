import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from 'src/app/fw/angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientRoutingModule } from './client-routing.module';
import { AddEditComponent } from './pages/add-edit/add-edit.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';



@NgModule({
  declarations: [
    ListComponent,
    AddEditComponent,
    DashboardComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    AngularMaterialModule
  ],
  exports: [
    SearchComponent
  ],
  entryComponents: [
    ListComponent,
    AddEditComponent,
    DashboardComponent,
    SearchComponent
  ]
})
export class ClientModule { }
