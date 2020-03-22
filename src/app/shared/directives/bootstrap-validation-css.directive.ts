import { Directive, HostBinding, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[formControlName],[ngModel],[formControl]',
})
export class BootstrapValidationCssDirective {
  constructor(@Self() private cd: NgControl) { }

  @HostBinding('class.is-invalid')
  get isInvalid(): boolean {
    const control = this.cd.control;
    return control ? control.invalid && control.touched : false;
  }

  @HostBinding('class.is-valid')
  get isValid(): boolean {
    const control = this.cd.control;
    return control ? control.valid && control.touched : false;
  }
}
