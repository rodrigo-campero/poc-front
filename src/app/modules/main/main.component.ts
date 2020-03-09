import { Component, OnInit } from '@angular/core';
import { Tab } from 'src/app/core/models/tab.model';
import { TabService } from 'src/app/core/services/tab.service';
import { SpinnerOverlayService } from 'src/app/core/services/spinner-overlay.service';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  tabs = new Array<Tab>();
  selectedTab: number;
  showContent: boolean = false;

  constructor(private tabService: TabService, private spinnerOverlayService: SpinnerOverlayService) { }

  ngOnInit() {
    this.tabService.tabSub.subscribe(tabs => {
      const spinnerSubscription: Subscription = this.spinnerOverlayService.spinner$.subscribe();
      this.showContent = false;
      this.tabs = tabs;
      this.selectedTab = tabs.findIndex(tab => tab.active);
      const timerSubscription: Subscription = timer(1000).subscribe(next => {
        this.showContent = true;
        spinnerSubscription.unsubscribe();
        timerSubscription.unsubscribe();
      })
    });


  }

  tabChanged(event) {
    const spinnerSubscription: Subscription = this.spinnerOverlayService.spinner$.subscribe();
    this.showContent = false;
    const timerSubscription: Subscription = timer(1000).subscribe(next => {
      this.showContent = true;
      spinnerSubscription.unsubscribe();
      timerSubscription.unsubscribe();
    });
  }

  removeTab(index: number): void {
    this.tabService.removeTab(index);
  }
}