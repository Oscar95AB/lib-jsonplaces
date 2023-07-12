import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigUrls, Urls } from './config-urls';
import { Album } from './interfaces/album';
import { FilterUser } from './interfaces/filters/filter-user';
import { Post } from './interfaces/post';
import { TODO } from './interfaces/todo';
import { DetailUser } from './interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class RestUsersService extends ConfigUrls {
  constructor() {
    super();
  }
  /**
   *  Get all users frrm JSONplaceholder
   */

  getAllUsers(): Observable<DetailUser[]> {
    return this.get<DetailUser[]>(Urls.users);
  }

  /**
   * @param id id of user to search
   * @return User with the id Param
   *
   */
  getUserId(id: number): Observable<DetailUser> {
    return this.get<DetailUser>(Urls.users, id);
  }

  postUser(user: DetailUser): Observable<DetailUser> {
    return this.post<DetailUser>(Urls.users, user);
  }
  putUser(user: DetailUser): Observable<DetailUser> {
    return this.put<DetailUser>(Urls.users, user);
  }
  deleteUser(id: number): Observable<DetailUser> {
    return this.delete<DetailUser>(Urls.users, id);
  }

  filterUser(filters: FilterUser): Observable<DetailUser[]> {
    return this.filter<FilterUser, DetailUser[]>(Urls.users, filters);
  }

  /* Catálogos de usuario */

  getUserAlbum(userId: number): Observable<Album> {
    const url = Urls.users + userId + Urls.albums;
    return this.get<Album>(url);
  }
  getUserTodo(userId: number): Observable<TODO[]> {
    const url = Urls.users + userId + Urls.todos;
    return this.get<TODO[]>(url);
  }
  getUserPosts(userId: number): Observable<Post[]> {
    const url = Urls.users + userId + Urls.posts;
    return this.get<Post[]>(url);
  }
  getUserComments(userId: number): Observable<Comment[]> {
    const url = Urls.users + userId + Urls.comments;
    return this.get<Comment[]>(url);
  }
}
