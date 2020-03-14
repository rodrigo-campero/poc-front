import { Directive, HostListener, Input } from '@angular/core';
import { OpenTab } from 'src/app/core/models/open-tab.model';
import { TabService } from 'src/app/core/services/tab.service';

@Directive({
  selector: '[tabRouterLink]'
})
export class TabRouterLinkDirective {
  @Input() tabPath: string;
  @Input() tabData?: any;
  @Input() tabTitle?: string;
  @Input() tabSubtitle?: string;
  @Input() tabIsCloseable = false;

  constructor(private tabService: TabService) { }

  @HostListener('click', ['$event'])
  clickEvent(event: { preventDefault: () => void; stopPropagation: () => void; }) {
    event.preventDefault();
    event.stopPropagation();
    console.log(this.tabPath);
    this.addNewTab();
  }

  addNewTab() {
    if (this.tabPath) {
      const tab = new OpenTab(this.tabPath, this.tabData, this.tabTitle, this.tabSubtitle, this.tabIsCloseable);
      console.log(tab);
      this.tabService.openTab(tab);
    }
  }
}
