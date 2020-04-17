import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { paginate } from 'src/app/core/helpers/paginate';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  pagesSize: number[] = [10, 20, 30, 40, 50];
  @Input() totalItems: number;
  @Input() initialPage = 1;
  @Input() pageSize = 10;
  @Input() maxPages = 5;
  @Output() changePage = new EventEmitter<any>(true);

  pager: any = {};

  ngOnInit() {
    if (this.totalItems) {
      this.setPage(this.initialPage);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.totalItems.currentValue !== changes.totalItems.previousValue) {
      this.setPage(this.initialPage);
    }
  }

  setPageSize(pageSize: number) {
    this.pageSize = pageSize;
    this.setPage(this.initialPage);
  }

  setPage(page: number) {
    this.pager = paginate(this.totalItems, page, this.pageSize, this.maxPages);
    this.changePage.emit({ currentPage: parseInt(this.pager.currentPage), pageSize: parseInt(this.pager.pageSize) });
  }
}
