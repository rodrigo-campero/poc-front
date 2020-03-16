import { AfterContentInit, Component, ComponentFactoryResolver, ContentChildren, QueryList, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OpenTab } from 'src/app/core/models/open-tab.model';
import { TabService } from 'src/app/core/services/tab.service';
import { DynamicTabsDirective } from '../../directives/dynamic-tabs.directive';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {
  dynamicTabs: TabComponent[] = [];
  @ContentChildren(TabComponent) fixedTabs: QueryList<TabComponent>;
  @ViewChild(DynamicTabsDirective, { static: true }) dynamicTabPlaceholder: DynamicTabsDirective;
  selectedTabIndex: number;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private tabService: TabService, private router: Router) { }

  ngAfterContentInit() {
    this.tabService.sbOpenTab.subscribe(tab => {
      this.openTab(tab);
    });

    const activeTabs = this.fixedTabs.filter(tab => tab.tabActive);
    if (activeTabs.length === 0 && this.fixedTabs.length > 0) {
      this.selectFixedTab(this.fixedTabs.length - 1);
    }
  }

  openTab(openTab: OpenTab) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      TabComponent
    );
    const viewContainerRef = this.dynamicTabPlaceholder.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    const tabRouter = this.router.config.filter(res => res.path === openTab.path)[0];
    const instance: TabComponent = componentRef.instance as TabComponent;
    instance.tabTitle = openTab.title || tabRouter.data.title;
    instance.tabSubtitle = openTab.subtitle || tabRouter.data.subtitle;
    instance.tabComponent = tabRouter.component;
    instance.tabData = openTab.data;
    instance.tabIsCloseable = openTab.isCloseable;
    this.dynamicTabs.push(componentRef.instance as TabComponent);
    this.selectDynamicTab(this.dynamicTabs.length - 1);
  }

  selectFixedTab(index: number) {
    this.deselectFixedTab();
    const newActive = this.fixedTabs.find((el, i, ar) => i === index);
    console.log(newActive);
    if (newActive) {
      newActive.tabActive = true;
    }
    this.selectedTabIndex = index;
  }

  deselectFixedTab() {
    const currentActive = this.fixedTabs.find((el, i, ar) => i === this.selectedTabIndex);
    if (currentActive) {
      currentActive.tabActive = false;
    }
  }

  selectDynamicTab(index: number) {
    this.deselectDynamicTab();
    this.deselectFixedTab();
    const newActive = this.dynamicTabs[index];
    if (newActive) {
      newActive.tabActive = true;
    } else {
      this.selectFixedTab(this.fixedTabs.length - 1);
    }
    this.selectedTabIndex = index;
  }

  deselectDynamicTab() {
    const currentActive = this.dynamicTabs[this.selectedTabIndex];
    if (currentActive) {
      currentActive.tabActive = false;
    }
  }

  closeTab(index: number) {
    this.dynamicTabs.splice(index, 1);
    const viewContainerRef = this.dynamicTabPlaceholder.viewContainerRef;
    viewContainerRef.remove(index);
    this.selectDynamicTab(this.dynamicTabs.length - 1);
  }
}
