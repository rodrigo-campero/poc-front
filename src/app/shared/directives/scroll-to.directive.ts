import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[scroll-to]'
})
export class ScrollToDirective implements AfterViewInit {
  constructor(private elRef: ElementRef) { }
  ngAfterViewInit() {
    this.elRef.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest'
    });
  }
}
