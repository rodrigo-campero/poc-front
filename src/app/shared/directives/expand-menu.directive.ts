import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[expand-menu]'
})
export class ExpandMenuDirective {
  @HostBinding('class.active') isOpen = false;
  @HostListener('click') toggleOpen($event) {
    const all = document.querySelector('.nav-item.active');
    console.log(all);
    // if (all) {
    //   all.classList.remove('active');
    //   this.isOpen = true;
    // }
    this.isOpen = !this.isOpen;
  }
}
