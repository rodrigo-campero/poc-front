import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StepperService {

  storage: any;

  constructor(private http: HttpClient) { }

  save(data) {
    this.storage = data;
    this.http.post('save', {});
  }

  get() {
    return this.storage;
  }

  getLastStep() {
    return this.http.get('getLastStep');
  }

}
