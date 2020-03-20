import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[scroll-to]'
})
export class ScrollToDirective implements AfterViewInit {

  constructor(private elRef: ElementRef) { }

  @Input() scrollBlock = 'end';

  ngAfterViewInit() {
    if (!this.elRef.nativeElement.scrollIntoView) {
      return;
    }
    this.elRef.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: this.scrollBlock,
      inline: 'nearest'
    });
  }
}
