import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { GoogleChartsModule } from 'angular-google-charts';
import { AngularMaterialModule } from '../fw/angular-material/angular-material.module';
import { FindComponent } from './components/find/find.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { TabContentComponent } from './components/tab-content/tab-content.component';
import { TabComponent } from './components/tab/tab.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { DynamicTabContentDirective } from './directives/dynamic-tab-content.directive';
import { DynamicTabsDirective } from './directives/dynamic-tabs.directive';
import { ScrollToDirective } from './directives/scroll-to.directive';
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
    StepperComponent,
    FindComponent,
    ScrollToDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    AngularMaterialModule,
    CdkStepperModule,
    GoogleChartsModule.forRoot(),
    NgSelectModule
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
    StepperComponent,
    FindComponent,
    ScrollToDirective
  ],
  entryComponents: [
    TabsComponent,
    TabComponent,
    TabContentComponent
  ]
})
export class SharedModule { }
