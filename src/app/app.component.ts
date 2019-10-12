import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let currentPage: number = 1;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  posts: any = [];
  currentPosts: any = [];

  postsPerPage: number = 10;
  indexOfLastPost: number;
  indexOfFirstPost: number;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => {
        this.posts = data;
      });
  }

  paginate(pageNumber) {
    currentPage = pageNumber;

  }

  ngDoCheck() {
    // Get current posts
    this.indexOfLastPost = currentPage * this.postsPerPage;
    this.indexOfFirstPost = this.indexOfLastPost - this.postsPerPage;
    this.currentPosts = this.posts.slice(this.indexOfFirstPost, this.indexOfLastPost);
  }
}
