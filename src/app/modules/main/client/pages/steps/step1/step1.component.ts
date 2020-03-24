import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {
  @Input() form: FormGroup;

  step1FormSubmitAttempt = false;
  readonly CPF = 0;
  readonly CNPJ = 1;
  mask = '';
  maskType: number;

  constructor() {
  }

  ngOnInit() {
    console.log(this.form);
    this.setMask(this.CPF);
  }

  get f() {
    return this.form.controls;
  }

  changed(value: any) {
    if (value.length > 14) {
      this.setMask(this.CNPJ);
    } else {
      this.setMask(this.CPF);
    }
  }

  onSubmit(formGroup: FormGroup) {
    this.step1FormSubmitAttempt = true;
    if (formGroup.valid) {
      console.log(formGroup);
    }
  }

  setMask(type: number) {
    if (type < 0 || type > 1 || type === this.maskType) {
      return;
    }

    this.maskType = type;
    if (type === this.CPF) {
      this.mask = '000.000.000-00999';
    } else {
      this.mask = '00.000.000/0000-00';
    }
  }

  reset() {
    this.form.reset();
    this.step1FormSubmitAttempt = false;
  }
}
