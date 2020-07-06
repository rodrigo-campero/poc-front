import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ContentChildren, ElementRef, HostListener, QueryList, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { timer } from 'rxjs';
import { OpenTab } from 'src/app/core/models/open-tab.model';
import { TabService } from 'src/app/core/services/tab.service';
import { DynamicTabsDirective } from '../../directives/dynamic-tabs.directive';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit, AfterViewInit {
  dynamicTabs: TabComponent[] = [];
  @ContentChildren(TabComponent) fixedTabs: QueryList<TabComponent>;
  @ViewChild(DynamicTabsDirective, { static: true }) taget: DynamicTabsDirective;
  selectedTabIndex: number;
  maximumTabLimit = 20;


  @ViewChild('container', { static: false }) public el: ElementRef;
  showScrollerRight = false;
  showScrollerLeft = false;
  range = 150;
  left: number;
  offsetWidth: number;
  scrollWidth: number;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private tabService: TabService,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) { }

  ngAfterViewInit() {
    this.checkScroller();
    this.cdRef.detectChanges();
  }

  checkScroller() {
    this.left = this.el.nativeElement.scrollLeft;
    this.offsetWidth = this.el.nativeElement.offsetWidth;
    this.scrollWidth = this.el.nativeElement.scrollWidth;
    this.showScrollerLeft = !(this.left <= this.range / 5);
    this.showScrollerRight = !(this.left + this.range > this.scrollWidth - this.offsetWidth - 1);
  }

  @HostListener('window:scroll', ['$event']) onScroll($event) {
  }

  public scrollRight(): void {
    // console.log(this.el.nativeElement.offsetWidth);
    // console.log(this.el.nativeElement.scrollWidth);
    // console.log(this.el.nativeElement.scrollLeft);
    // this.left = this.el.nativeElement.scrollLeft = this.left = this.el.nativeElement.scrollLeft + this.range;
    this.el.nativeElement.scrollTo({ left: (this.el.nativeElement.scrollLeft + this.range), behavior: 'smooth' });
    timer(100).subscribe(() => {
      this.checkScroller();
    });
  }

  public scrollLeft(): void {
    // console.log(this.el.nativeElement.offsetWidth);
    // console.log(this.el.nativeElement.scrollWidth);
    // console.log(this.el.nativeElement.scrollLeft);
    this.el.nativeElement.scrollTo({ left: (this.el.nativeElement.scrollLeft - this.range), behavior: 'smooth' });
    timer(100).subscribe(() => {
      this.checkScroller();
    });
  }

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
    if (openTab.isExclusive) {
      let index = -1;
      for (let i = 0; i < this.dynamicTabs.length; i++) {
        const existingTab = this.dynamicTabs[i];
        if (existingTab.path === openTab.path && existingTab.tabData === openTab.data) {
          index = i;
          break;
        }
      }
      if (index >= 0) {
        this.selectDynamicTab(index);
        return;
      }
    }
    let tabRoute: Route;
    for (const route of this.router.config) {
      if (route.path === openTab.path) {
        tabRoute = route;
        break;
      }
    }
    if (!tabRoute) {
      return;
    }
    if (this.dynamicTabs.length >= this.maximumTabLimit) { this.closeTabWithoutSelection(0); }
    if (tabRoute.data && tabRoute.data.maximumTabLimit) {
      let indexfirstRemove: number;
      let countMaximumTabLimit = 0;
      for (let i = 0; i < this.dynamicTabs.length; i++) {
        const existingTab = this.dynamicTabs[i];
        if (existingTab.path === openTab.path) {
          if (indexfirstRemove === undefined) { indexfirstRemove = i; }
          countMaximumTabLimit += 1;
          if (countMaximumTabLimit >= tabRoute.data.maximumTabLimit) {
            this.closeTabWithoutSelection(indexfirstRemove);
            break;
          }
        }
      }
    }
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      TabComponent
    );
    const viewContainerRef = this.taget.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    const instance: TabComponent = componentRef.instance as TabComponent;
    instance.path = openTab.path;
    instance.tabTitle = openTab.title || tabRoute.data.title;
    instance.tabSubtitle = openTab.subtitle || tabRoute.data.subtitle;
    instance.tabComponent = tabRoute.component;
    instance.tabData = openTab.data;
    instance.tabIsCloseable = openTab.isCloseable;
    this.dynamicTabs.push(componentRef.instance as TabComponent);
    this.selectDynamicTab(this.dynamicTabs.length - 1);
  }

  selectFixedTab(index: number) {
    this.deselectFixedTab();
    this.deselectDynamicTab();
    const newActive = this.fixedTabs.find((el, i, ar) => i === index);
    if (newActive) {
      newActive.tabActive = true;
    }
    this.selectedTabIndex = index;
  }

  deselectFixedTab() {
    this.fixedTabs.forEach(t => (t.tabActive = false));
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

  closeTabWithoutSelection(index: number) {
    this.dynamicTabs.splice(index, 1);
    const viewContainerRef = this.taget.viewContainerRef;
    viewContainerRef.remove(index);
    this.selectedTabIndex = this.dynamicTabs.length - 1;
  }

  closeTab(index: number) {
    this.dynamicTabs.splice(index, 1);
    const viewContainerRef = this.taget.viewContainerRef;
    viewContainerRef.remove(index);
    this.selectDynamicTab(this.dynamicTabs.length - 1);
  }
}
