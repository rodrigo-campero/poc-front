import { Directive, Input, HostListener } from '@angular/core';
import { TabService } from 'src/app/core/services/tab.service';
import { Router } from '@angular/router';
import { Tab } from 'src/app/core/models/tab.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Directive({
  selector: '[tabRouterLink]'
})
export class TabRouterLinkDirective {

  @Input() navigateFor: string;

  constructor(private tabService: TabService, private route: Router, private authService: AuthService) { }

  @HostListener('click', ['$event'])
  clickEvent(event: { preventDefault: () => void; stopPropagation: () => void; }) {
    event.preventDefault();
    event.stopPropagation();
    console.log(this.navigateFor);
    this.addNewTab();
  }

  addNewTab() {
    if (this.navigateFor) {
      console.log(this.route);
      let p = this.route.config.filter(res => res.path == this.navigateFor)[0];
      if (p && this.authService.canActivate(this.navigateFor)) {
        this.tabService.addTab(
          new Tab(p.component, "Comp1 View", { parent: "AppComponent" })
        );
      }
    }
  }
}
