import { Observable, take } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { switchMap } from 'rxjs/operators';

export class ConfigUrls {
  readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  /**
   * @param url required, can be  Urls.xxx or '/users/1/posts'
   * @param method required, acción que hacer a fakeApi
   * @param body optional, object to send in body or id to do action
   *
   * Comun method to do actions as GET/POST/PUT/DELETE sending interface and return the same interface
   */
  private comunActions<U>(
    url: string,
    method: 'POST' | 'PUT' | 'GET' | 'DELETE',
    body?: U | number
  ): Observable<U> {
    let id;

    // body param will be number or object
    if (typeof body === 'number') {
      id = body;
      body = undefined;
    } else if (method === 'PUT') {
      id = (body as any)?.id;
    }
    // variables for Url and body request params
    const formatUrl = this.baseUrl + url + (id ? id : '');
    const formatBody = body ? JSON.stringify(body) : undefined;

    return fromFetch(formatUrl, {
      method: method,
      body: formatBody,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .pipe(
        switchMap((response) => {
          return fromPromise(response.json()) as Observable<U>;
        })
      )
      .pipe(take(1));
  }

  get<U>(url: string, id?: number): Observable<U> {
    return this.comunActions<U>(url, 'GET', id);
  }

  post<U>(url: string, body: U): Observable<U> {
    return this.comunActions<U>(url, 'POST', body);
  }

  put<U>(url: string, body: U): Observable<U> {
    return this.comunActions<U>(url, 'PUT', body);
  }

  delete<U>(url: string, id: number): Observable<U> {
    return this.comunActions<U>(url, 'DELETE', id);
  }

  filter<E, U>(url: string, filters: E): Observable<U> {
    let queryString = `?`;
    Object.keys(filters as Object).forEach((f) => {
      queryString += `${f}=${(filters as any)[f]}&`;
    });
    queryString = queryString.substring(0, queryString.length - 1);
    return this.comunActions<U>(url, 'GET');
  }
}

export enum Urls {
  users = '/users/',
  posts = '/posts/',
  comments = '/comments/',
  albums = '/albums/',
  fotos = '/fotos/',
  todos = '/todos/',
}
