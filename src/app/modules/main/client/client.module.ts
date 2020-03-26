import { CommonModule } from '@angular/common';
import { NgModule,  LOCALE_ID  } from '@angular/core';
import { AngularMaterialModule } from 'src/app/fw/angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientRoutingModule } from './client-routing.module';
import { AddEditComponent } from './pages/add-edit/add-edit.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';
import { Step1Component } from './pages/steps/step1/step1.component';
import { Step2Component } from './pages/steps/step2/step2.component';
import { Step3Component } from './pages/steps/step3/step3.component';
import { Step4Component } from './pages/steps/step4/step4.component';
import { MainComponent } from './pages/steps/main/main.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    ListComponent,
    AddEditComponent,
    DashboardComponent,
    SearchComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    MainComponent    
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    AngularMaterialModule,    
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule     
  ],
  exports: [
    SearchComponent    
  ],
  entryComponents: [
    ListComponent,
    AddEditComponent,
    DashboardComponent,
    SearchComponent    
  ], providers: [    {provide: LOCALE_ID,      useValue: 'pt-BR'    }  ]
})
export class ClientModule { }
