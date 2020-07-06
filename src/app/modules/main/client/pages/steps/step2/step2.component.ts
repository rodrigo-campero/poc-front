import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {
  @Input() form: FormGroup;
  formSubmitAttempt = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formGroup: FormGroup) {
    this.formSubmitAttempt = true;
    if (formGroup.valid) {
    }
  }

  get f() {
    return this.form.controls;
  }
}
