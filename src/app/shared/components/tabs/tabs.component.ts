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

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  @ViewChild(DynamicTabsDirective, { static: true }) dynamicTabPlaceholder: DynamicTabsDirective;

  /*
    Alternative approach of using an anchor directive
    would be to simply get hold of a template variable
    as follows
  */
  // @ViewChild('container', {read: ViewContainerRef}) dynamicTabPlaceholder;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private tabService: TabService, private router: Router) { }

  // contentChildren are set
  ngAfterContentInit() {
    this.tabService.sbOpenTab.subscribe(tab => {
      this.openTab(tab);
    });

    // get all active tabs
    const activeTabs = this.tabs.filter(tab => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0 && this.tabs.first) {
      this.selectTab(this.tabs.first);
    }
  }

  openTab(openTab: OpenTab) {
    // get a component factory for our TabComponent
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      TabComponent
    );

    // fetch the view container reference from our anchor directive
    const viewContainerRef = this.dynamicTabPlaceholder.viewContainerRef;

    // alternatively...
    // let viewContainerRef = this.dynamicTabPlaceholder;

    // create a component instance
    const componentRef = viewContainerRef.createComponent(componentFactory);
    const tabRouter = this.router.config.filter(res => res.path === openTab.path)[0];
    console.log(tabRouter);
    // set the according properties on our component instance
    const instance: TabComponent = componentRef.instance as TabComponent;
    console.log(openTab.title || tabRouter.data.title);
    instance.title = openTab.title || tabRouter.data.title;
    instance.subtitle = openTab.subtitle || tabRouter.data.subtitle;
    instance.component = tabRouter.component;
    instance.data = openTab.data;
    instance.isCloseable = openTab.isCloseable;

    // remember the dynamic component for rendering the
    // tab navigation headers
    this.dynamicTabs.push(componentRef.instance as TabComponent);

    // set it active
    this.selectTab(this.dynamicTabs[this.dynamicTabs.length - 1]);
  }

  selectTab(tab: TabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach(value => value.active = false);
    this.dynamicTabs.forEach(value => value.active = false);

    // activate the tab the user has clicked on.
    tab.active = true;
  }

  closeTab(tab: TabComponent) {
    for (let i = 0; i < this.dynamicTabs.length; i++) {
      if (this.dynamicTabs[i] === tab) {
        // remove the tab from our array
        this.dynamicTabs.splice(i, 1);

        // destroy our dynamically created component again
        const viewContainerRef = this.dynamicTabPlaceholder.viewContainerRef;
        // let viewContainerRef = this.dynamicTabPlaceholder;
        viewContainerRef.remove(i);

        // set tab index to 1st one
        if (this.dynamicTabs.length || this.tabs.last) {
          this.selectTab(this.dynamicTabs.length > 0 ? this.dynamicTabs[this.dynamicTabs.length - 1] : this.tabs.last);
        }
        break;
      }
    }
  }

  closeActiveTab() {
    const activeTabs = this.dynamicTabs.filter(tab => tab.active);
    if (activeTabs.length > 0) {
      // close the 1st active tab (should only be one at a time)
      this.closeTab(activeTabs[0]);
    }
  }
}
