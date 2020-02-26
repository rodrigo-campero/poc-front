import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ClientModule } from './client/client.module';
import { EmployeeModule } from './employee/employee.module';
import { OrderModule } from './order/order.module';

import { HeaderComponent } from './shared/components/header/header.component';
import { MatToolbarModule, MatIconModule, MatTabsModule, MatButtonModule, MatMenuModule } from '@angular/material';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [MainComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    ClientModule,
    EmployeeModule,
    OrderModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatMenuModule
  ]
})
export class MainModule { }
