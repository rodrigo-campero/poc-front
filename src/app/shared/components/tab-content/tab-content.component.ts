import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ContentContainerDirective } from '../../directives/content-container.directive';
import { Tab } from 'src/app/core/models/tab.model';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnInit {
  @Input() tab: Tab;
  @ViewChild(ContentContainerDirective, { static: true })
  contentContainer: ContentContainerDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  ngOnInit() {
    const tab: Tab = this.tab;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(tab.component);
    const viewContainerRef = this.contentContainer.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as any).data = tab.tabData;
  }
}