import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ListComponent } from './pages/list/list.component';
import { AddEditComponent } from './pages/add-edit/add-edit.component';


@NgModule({
  declarations: [
    ListComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  entryComponents: [
    ListComponent,
    AddEditComponent
  ]
})
export class ClientModule { }
