import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsExtensions } from 'src/app/core/validators/validators-extensions';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {
  step1Form: FormGroup;
  step1FormSubmitAttempt = false;
  readonly CPF = 0;
  readonly CNPJ = 1;
  mask = '';
  maskType: number;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.step1Form = this.fb.group({
      cpfCnpj: ['', [Validators.required, ValidatorsExtensions.cpfCnpj]]
    });
    this.setMask(this.CPF);
  }

  get f() {
    return this.step1Form.controls;
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
    this.step1Form.reset();
    this.step1FormSubmitAttempt = false;
  }
}
