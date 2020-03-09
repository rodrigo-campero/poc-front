import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import { TabContentComponent } from './components/tab-content/tab-content.component';
import { ContentContainerDirective } from './directives/content-container.directive';
import { TabRouterLinkDirective } from './directives/tab-router-link.directive';

import { GoogleChartsModule } from 'angular-google-charts';
import { SpinnerOverlayComponent } from './components/spinner-overlay/spinner-overlay.component';
import { AngularMaterialModule } from '../fw/angular-material/angular-material.module';


@NgModule({
  declarations: [
    TabContentComponent,
    ContentContainerDirective,
    TabRouterLinkDirective,
    SpinnerOverlayComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    AngularMaterialModule,
    GoogleChartsModule.forRoot()
  ],
  exports: [
    TabContentComponent,
    ContentContainerDirective,
    TabRouterLinkDirective,
    GoogleChartsModule,
    SpinnerOverlayComponent
  ],
  entryComponents: [
    SpinnerOverlayComponent
  ]
})
export class SharedModule { }
