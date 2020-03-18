import { Component, Input, OnInit } from '@angular/core';
import { concat, Observable, Observer, of, Subject } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {

  @Input() items: Observable<any[]>;
  itemsLoading: boolean;
  input: Subject<string> = new Subject<string>();

  constructor() { }
  // https://github.com/ng-select/ng-select/issues/584
  ngOnInit() {
    this.items = concat(
      of([]),
      this.input.pipe(
        tap(() => { this.itemsLoading = true; }),
        debounceTime(5000),
        distinctUntilChanged(),
        switchMap(term => this.fakeService(term).pipe(
          catchError(() => of([])),
          tap(() => { this.itemsLoading = false; })
        ))
      )
    );
  }

  fakeService(term: string): Observable<any[]> {
    return new Observable((observer: Observer<any[]>) => {
      observer.next([{
        title: 't1',
        subtitle: 's1'
      },
      {
        title: 't2',
        subtitle: 's2'
      },
      {
        title: 't3',
        subtitle: 's3'
      }]);
      observer.complete();
    });
  }

  customSearchFn(term: string, item: any) {
    term = term.toLowerCase();
    // return item.title.toLowerCase().indexOf(term) > -1 || item.subtitle.toLowerCase() === term;

  }
}
