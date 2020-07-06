import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from 'src/app/fw/angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientModule } from './client/client.module';
import { EmployeeModule } from './employee/employee.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { OrderModule } from './order/order.module';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';

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
