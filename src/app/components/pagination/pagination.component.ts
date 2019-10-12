import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges {
  @Input() postsPerPage: any;
  @Input() totalPosts: any;
  @Input() paginate: void;

  pageNumbers = [];

  ngOnChanges() {
    for (let i = 1; i <= Math.ceil(this.totalPosts / this.postsPerPage); i++) {
      this.pageNumbers.push(i);
    }
  }

}
