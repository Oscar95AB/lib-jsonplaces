import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigUrls, Urls } from './config-urls';
import { Album } from './interfaces/album';
import { Photo } from './interfaces/photo';

@Injectable({
  providedIn: 'root',
})
export class RestAlbumService extends ConfigUrls {
  constructor() {
    super();
  }
  getAllAlbums(): Observable<Album[]> {
    return this.get<Album[]>(Urls.albums);
  }

  getAlbumId(id: number): Observable<Album> {
    return this.get<Album>(Urls.albums, id);
  }

  postAlbum(album: Album): Observable<Album> {
    album = { ...album, id: 0 };
    return this.post<Album>(Urls.albums, album);
  }
  putAlbum(album: Album): Observable<Album> {
    return this.put<Album>(Urls.albums, album);
  }
  deleteAlbum(id: number): Observable<Album> {
    return this.delete<Album>(Urls.albums, id);
  }

  /* Catálogos de Album */

  getAlbumPhotos(albumId: number) {
    const url = Urls.albums + albumId + Urls.comments;
    return this.get<Photo[]>(url);
  }
}
