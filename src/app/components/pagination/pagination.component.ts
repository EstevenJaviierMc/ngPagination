import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
@Input() postsPerPage: number;
@Input() totalPosts: number;
currentPage: number = 1;
 pageNumbers = [];
  constructor() { }

  ngOnInit() {
      for (let i = 1; i <= Math.ceil(this.totalPosts / this.postsPerPage); i++) {
        this.pageNumbers.push(i);
      }
  }

  paginate(pageNumber: number) {
  	this.currentPage = pageNumber;
alert(this.currentPage);
  }
  ngOnChanges() {
    for (let i = 1; i <= Math.ceil(this.totalPosts / this.postsPerPage); i++) {
        this.pageNumbers.push(i);
      }
  }

}
