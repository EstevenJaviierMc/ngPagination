import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PaginationComponent} from '../pagination/pagination.component';
@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
@ViewChild(PaginationComponent, {static: false} ) child;	
posts: any = [];
  currentPosts: any = [];

  currentPage: number = 1;
  postsPerPage: number = 10;
  indexOfLastPost: number;
  indexOfFirstPost: number;
  
  constructor(private http: HttpClient) { }

  ngOnInit()  {
   	this.http.get('https://jsonplaceholder.typicode.com/posts')
   	.subscribe(data => {
   		this.posts = data;
   	});
  }

  ngDoCheck() {
    this.indexOfLastPost = this.currentPage * this.postsPerPage;
    this.indexOfFirstPost = this.indexOfLastPost - this.postsPerPage;
    this.currentPosts = this.posts.slice(this.indexOfFirstPost, this.indexOfLastPost);
  }
  ngAfterViewChecked() {
    this.currentPage = this.child.currentPage;
  }
}
