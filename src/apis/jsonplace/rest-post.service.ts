import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigUrls, Urls } from './config-urls';
import { Post } from './interfaces/post';
@Injectable({
  providedIn: 'root',
})
export class RestPostService extends ConfigUrls {
  constructor() {
    super();
  }

  getAllPosts(): Observable<Post[]> {
    return this.get<Post[]>(Urls.posts);
  }

  getPostId(id: number): Observable<Post> {
    return this.get<Post>(Urls.posts, id);
  }

  postPost(post: Post): Observable<Post> {
    post = { ...post, id: 0 };
    return this.post<Post>(Urls.posts, post);
  }
  putPost(post: Post): Observable<Post> {
    return this.put<Post>(Urls.posts, post);
  }
  deletePost(id: number): Observable<Post> {
    return this.delete<Post>(Urls.posts, id);
  }

  /* Catálogos de Posts */

  getPostComments(postId: number) {
    const url = Urls.posts + postId + Urls.comments;
    return this.get<Comment[]>(url);
  }
}
