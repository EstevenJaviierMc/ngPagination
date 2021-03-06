import { Component, OnInit, DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let currentPage: number = 1;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: any = [];
  loading: boolean = false;
  postsPerPage: number = 10;

  indexOfLastPost: number;
  indexOfFirstPost: number;
  currentPosts: any;
  
  constructor(private http: HttpClient) { }

  ngOnInit()  {
    this.loading = true;

   	this.http.get('https://jsonplaceholder.typicode.com/posts')
   	.subscribe(data => {
   		this.posts = data;
      this.loading = false;
   	});
  }

  paginate(pageNumber: number) {
  	currentPage = pageNumber;
  }

  ngDoCheck() {
    this.indexOfLastPost = currentPage * this.postsPerPage;
    this.indexOfFirstPost = this.indexOfLastPost - this.postsPerPage;
    this.currentPosts = this.posts.slice(this.indexOfFirstPost, this.indexOfLastPost)
  }

}
