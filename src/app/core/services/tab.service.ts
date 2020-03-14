import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OpenTab } from '../models/open-tab.model';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  sbOpenTab: Subject<OpenTab> = new Subject<OpenTab>();

  openTab(openTab: OpenTab) {
    this.sbOpenTab.next(openTab);
  }
}
