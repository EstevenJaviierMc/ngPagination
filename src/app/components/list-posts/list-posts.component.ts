import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  @Input() posts: any;
  @Input() loading: boolean;

  constructor() { }

  ngOnInit() {
  }

}
