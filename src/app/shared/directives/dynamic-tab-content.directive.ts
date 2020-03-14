import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamic-tab-content]'
})
export class DynamicTabContentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
