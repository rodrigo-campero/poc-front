import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import { TabContentComponent } from './components/tab-content/tab-content.component';
import { ContentContainerDirective } from './directives/content-container.directive';
import { TabRouterLinkDirective } from './directives/tab-router-link.directive';


@NgModule({
  declarations: [
    TabContentComponent,
    ContentContainerDirective,
    TabRouterLinkDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    TabContentComponent,
    ContentContainerDirective,
    TabRouterLinkDirective
  ]
})
export class SharedModule { }
