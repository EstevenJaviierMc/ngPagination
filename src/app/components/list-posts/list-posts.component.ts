import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
	posts: any = [];
  
  constructor(private http: HttpClient) { }

  currentPage = 1;
  postsPerPage: number = 10;
  indexOfLastPost = this.currentPage * this.postsPerPage;
  indexOfFirstPost = this.indexOfLastPost - this.postsPerPage;
  currentPosts: any = [];

  paginate(pageNumber: number) {
  	this.currentPage = pageNumber;
        this.currentPosts = this.posts.slice(this.indexOfFirstPost, this.indexOfLastPost);
  };

  ngOnInit()  {
   	this.http.get('https://jsonplaceholder.typicode.com/posts')
   	.subscribe(data => {
   		this.posts = data;
      this.currentPosts = this.posts.slice(this.indexOfFirstPost, this.indexOfLastPost);
   	});
    

  }
}
