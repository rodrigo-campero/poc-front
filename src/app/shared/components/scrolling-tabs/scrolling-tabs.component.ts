import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-scrolling-tabs',
  templateUrl: './scrolling-tabs.component.html',
  styleUrls: ['./scrolling-tabs.component.scss']
})
export class ScrollingTabsComponent implements AfterViewInit {

  @ViewChild('container', { static: false }) public el: ElementRef;
  showScrollerRight = false;
  showScrollerLeft = false;
  range = 150;
  left: number;
  offsetWidth: number;
  scrollWidth: number;

  constructor(private cdRef: ChangeDetectorRef) {
  }

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

}
