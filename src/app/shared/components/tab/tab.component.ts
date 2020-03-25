import { Component, Input, Type } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  @Input() path: string;
  @Input() tabTitle: string;
  @Input() tabSubtitle: string;
  @Input() tabActive: boolean;
  @Input() tabIsCloseable: boolean;
  @Input() tabComponent: Type<Component>;
  @Input() tabData: any;
}
