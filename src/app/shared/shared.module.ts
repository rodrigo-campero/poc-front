import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import { TabContentComponent } from './components/tab-content/tab-content.component';
import { DynamicTabContentDirective } from './directives/dynamic-tab-content.directive';
import { TabRouterLinkDirective } from './directives/tab-router-link.directive';

import { GoogleChartsModule } from 'angular-google-charts';
import { AngularMaterialModule } from '../fw/angular-material/angular-material.module';
import { TabComponent } from './components/tab/tab.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { DynamicTabsDirective } from './directives/dynamic-tabs.directive';


@NgModule({
  declarations: [
    TabsComponent,
    TabComponent,
    TabContentComponent,
    DynamicTabsDirective,
    DynamicTabContentDirective,
    TabRouterLinkDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    AngularMaterialModule,
    GoogleChartsModule.forRoot()
  ],
  exports: [
    TabsComponent,
    TabComponent,
    TabContentComponent,
    DynamicTabsDirective,
    DynamicTabContentDirective,
    TabRouterLinkDirective,
    GoogleChartsModule
  ],
  entryComponents: [
    TabsComponent,
    TabComponent,
    TabContentComponent
  ]
})
export class SharedModule { }
