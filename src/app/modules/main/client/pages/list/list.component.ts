import { Component, OnInit, Input } from '@angular/core';
import { IMyDateModel, IAngularMyDpOptions } from 'angular-mydatepicker/public-api';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  
  public myDatePickerOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd/mm/yyyy'
  };


  @Input() data;
  router: any;
  public disabled: boolean = false;

  public myForm: FormGroup;
  
  constructor( private formBuilder: FormBuilder) {      
  }

  ngOnInit() { 
    let d: Date = new Date();
    d.setDate(d.getDate() + 2);
    let model: IMyDateModel = {isRange: false, singleDate: {jsDate: d}, dateRange: null};

    this.myForm = this.formBuilder.group({
      myDate: [model,"" ]   
    });   
  }
 
  

}
