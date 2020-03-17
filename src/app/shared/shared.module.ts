import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';
import { AngularMaterialModule } from '../fw/angular-material/angular-material.module';
import { StepperComponent } from './components/stepper/stepper.component';
import { TabContentComponent } from './components/tab-content/tab-content.component';
import { TabComponent } from './components/tab/tab.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { DynamicTabContentDirective } from './directives/dynamic-tab-content.directive';
import { DynamicTabsDirective } from './directives/dynamic-tabs.directive';
import { TabRouterLinkDirective } from './directives/tab-router-link.directive';
import { SharedRoutingModule } from './shared-routing.module';





@NgModule({
  declarations: [
    TabsComponent,
    TabComponent,
    TabContentComponent,
    DynamicTabsDirective,
    DynamicTabContentDirective,
    TabRouterLinkDirective,
    StepperComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    AngularMaterialModule,
    CdkStepperModule,
    GoogleChartsModule.forRoot()
  ],
  exports: [
    TabsComponent,
    TabComponent,
    TabContentComponent,
    DynamicTabsDirective,
    DynamicTabContentDirective,
    TabRouterLinkDirective,
    GoogleChartsModule,
    CdkStepperModule,
    StepperComponent
  ],
  entryComponents: [
    TabsComponent,
    TabComponent,
    TabContentComponent
  ]
})
export class SharedModule { }
