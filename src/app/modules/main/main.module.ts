import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { AngularMaterialModule } from 'src/app/fw/angular-material/angular-material.module';

import { MainComponent } from './main.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ClientModule } from './client/client.module';
import { EmployeeModule } from './employee/employee.module';
import { OrderModule } from './order/order.module';

@NgModule({
  declarations: [MainComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    AngularMaterialModule,
    ClientModule,
    EmployeeModule,
    OrderModule
  ]
})
export class MainModule { }
