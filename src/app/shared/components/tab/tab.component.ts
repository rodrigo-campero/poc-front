import { Component, Input, Type } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() active: boolean;
  @Input() isCloseable: boolean;
  @Input() component: Type<Component>;
  @Input() data: any;
}
