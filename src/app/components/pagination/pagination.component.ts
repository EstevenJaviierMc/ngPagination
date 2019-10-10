import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() postsPerPage: number;
  @Input() totalPosts: number;
  @Input() paginate: any;

  first = 1;
  end:number ;

  pageNumbers = [];
  constructor() { }

  ngOnInit() { }
  
  ngOnChanges() {
    for (let i = 1; i <= Math.ceil(this.totalPosts / this.postsPerPage); i++) {
      this.pageNumbers.push(i);
    }
    this.end = this.pageNumbers.length;
  }

}
