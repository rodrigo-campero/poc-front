import { Component, OnInit } from '@angular/core';
import { Tab } from 'src/app/core/models/tab.model';
import { TabService } from 'src/app/core/services/tab.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  tabs = new Array<Tab>();
  selectedTab: number;

  constructor(private tabService: TabService) { }

  ngOnInit() {
    this.tabService.tabSub.subscribe(tabs => {
      this.tabs = tabs;
      this.selectedTab = tabs.findIndex(tab => tab.active);
    });
  }

  tabChanged(event) {
    console.log("tab changed");
  }

  removeTab(index: number): void {
    this.tabService.removeTab(index);
  }
}