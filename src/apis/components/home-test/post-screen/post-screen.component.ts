import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Post } from './../../../../apis/jsonplace/interfaces/post';
import { RestPostService } from './../../../../apis/jsonplace/rest-post.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-post-screen',
  templateUrl: './post-screen.component.html',
  styleUrls: ['./post-screen.component.css'],
})
export class PostScreenComponent implements OnInit {
  listPosts: Post[] = [];

  constructor(private _restPost: RestPostService) {}

  ngOnInit() {
    forkJoin({
      // users: this._restUser.getAllUsers(),
      posts: this._restPost.getAllPosts(),
    }).subscribe((resp) => {
      // this.listUsers = resp.users as any;
      this.listPosts = resp.posts;
    });
  }

  // Posts
  getPost(id: number) {
    this._restPost.getPostId(id).subscribe((post) => {
      console.log('get post:' + id, post);
    });
  }
  postPost() {
    const post: Post = {
      body: 'prueba',
      id: 0,
      title: 'prueba',
      userId: 1,
    };
    this._restPost.postPost(post).subscribe((postResp) => {
      console.log('Post post:' + post.body, postResp);
    });
  }
  putPost() {
    const post: Post = {
      body: 'prueba',
      id: 1,
      title: 'prueba',
      userId: 1,
    };
    this._restPost.putPost(post).subscribe((postResp) => {
      console.log('Put post:' + post, postResp);
    });
  }
  deletePost(id: number) {
    this._restPost.getPostId(id).subscribe((post) => {
      console.log('Delete post:' + id, post);
    });
  }
  getPostComments(id: number) {
    this._restPost.getPostComments(id).subscribe((comments) => {
      console.log('Comments del Post:' + id, comments);
    });
  }
}
