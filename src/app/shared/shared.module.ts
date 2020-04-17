import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { GoogleChartsModule } from 'angular-google-charts';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { AngularMaterialModule } from '../fw/angular-material/angular-material.module';
import { FindComponent } from './components/find/find.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { TabContentComponent } from './components/tab-content/tab-content.component';
import { TabComponent } from './components/tab/tab.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { BootstrapValidationCssDirective } from './directives/bootstrap-validation-css.directive';
import { DynamicTabContentDirective } from './directives/dynamic-tab-content.directive';
import { DynamicTabsDirective } from './directives/dynamic-tabs.directive';
import { HasPermissionDirective } from './directives/has-permission.directive';
import { ScrollToDirective } from './directives/scroll-to.directive';
import { TabRouterLinkDirective } from './directives/tab-router-link.directive';
import { SharedRoutingModule } from './shared-routing.module';


export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

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
    ScrollToDirective,
    BootstrapValidationCssDirective,
    HasPermissionDirective,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    CdkStepperModule,
    GoogleChartsModule.forRoot(),
    NgSelectModule,
    NgxMaskModule.forRoot(options)
  ],
  exports: [
    ReactiveFormsModule,
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
    ScrollToDirective,
    NgxMaskModule,
    BootstrapValidationCssDirective,
    HasPermissionDirective,
    PaginationComponent
  ],
  entryComponents: [
    TabsComponent,
    TabComponent,
    TabContentComponent
  ]
})
export class SharedModule { }
