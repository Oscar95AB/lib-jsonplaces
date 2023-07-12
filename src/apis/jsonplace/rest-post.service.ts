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
  deleteUser(id: number): Observable<Post> {
    return this.delete<Post>(Urls.users, id);
  }

  /* Catálogos de Posts */

  // getUserAlbum(userId: number): Observable<DetailUser> {
  //   const url = Urls.users + userId + Urls.albums;
  //   return this.comunActions<DetailUser>(url, 'GET');
  // }
  // getUserTodo(userId: number) {
  //   const url = Urls.users + userId + Urls.todos;
  //   return this.comunActions<DetailUser>(url, 'GET');
  // }
  // getUserPosts(userId: number) {
  //   const url = Urls.users + userId + Urls.posts;
  //   return this.comunActions<DetailUser>(url, 'GET');
  // }
  // getUserComments(userId: number) {
  //   const url = Urls.users + userId + Urls.comments
  //   return this.comunActions<Comment[]>(url, 'GET');
  // }
}
