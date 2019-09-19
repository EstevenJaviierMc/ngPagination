import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: any = [];
  currentPosts: any = [];

  currentPage: number = 1;
  postsPerPage: number = 10;
  indexOfLastPost: number;
  indexOfFirstPost: number;

  constructor(private http: HttpClient) {
    // Get current posts
    this.indexOfLastPost = this.currentPage * this.postsPerPage;
    this.indexOfFirstPost = this.indexOfLastPost - this.postsPerPage;
    this.currentPosts = this.posts.slice(this.indexOfFirstPost, this.indexOfLastPost);
  }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => {
        this.posts = data;
      });
  }

  paginate(pageNumber) {
    this.currentPage = pageNumber;
  }
}
