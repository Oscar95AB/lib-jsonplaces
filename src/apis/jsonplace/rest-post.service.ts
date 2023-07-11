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
    return this.comunActions<Post[]>(Urls.posts, 'G');
  }

  getPostId(id: number): Observable<Post> {
    return this.comunActions<Post>(Urls.posts, 'G', id);
  }

  // postUser(user: DetailUser): Observable<DetailUser> {
  //   user = { ...user, id: 0 };
  //   return this.comunActions<DetailUser>(Urls.users, 'POST', user);
  // }
  // putUser(user: DetailUser): Observable<DetailUser> {
  //   return this.comunActions<DetailUser>(Urls.users, 'PUT', user);
  // }
  // deleteUser(id: number): Observable<DetailUser> {
  //   return this.comunActions<DetailUser>(Urls.users, 'DELETE', id);
  // }

  // /* Catálogos de usuario */

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
