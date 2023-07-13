import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Album } from './../../../../apis/jsonplace/interfaces/album';
import { RestAlbumService } from './../../../../apis/jsonplace/rest-album.service';

@Component({
  selector: 'app-album-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-screen.component.html',
  styleUrls: ['./album-screen.component.css'],
})
export class AlbumScreenComponent implements OnInit {
  listAlbums: Album[] = [];

  constructor(private _restAlbum: RestAlbumService) {}

  ngOnInit() {
    forkJoin({
      // users: this._restUser.getAllUsers(),
      listAlbums: this._restAlbum.getAllAlbums(),
    }).subscribe((resp) => {
      // this.listUsers = resp.users as any;
      this.listAlbums = resp.listAlbums;
    });
  }

  // Posts
  getAlbum(id: number) {
    this._restAlbum.getAlbumId(id).subscribe((album) => {
      console.log('get album:' + id, album);
    });
  }
  postAlbum() {
    const album: Album = {
      id: 0,
      title: 'prueba',
      userId: 1,
    };
    this._restAlbum.postAlbum(album).subscribe((albumtResp) => {
      console.log('Post post:' + album.title, albumtResp);
    });
  }
  putAlbum() {
    const album: Album = {
      id: 1,
      title: 'prueba',
      userId: 1,
    };
    this._restAlbum.putAlbum(album).subscribe((albumtResp) => {
      console.log('Put post:' + album, albumtResp);
    });
  }
  deletePost(id: number) {
    this._restAlbum.deleteAlbum(id).subscribe((album) => {
      console.log('Delete album:' + id, album);
    });
  }
  getAlbumPhotos(id: number) {
    this._restAlbum.getAlbumPhotos(id).subscribe((photos) => {
      console.log('Photos del Album:' + id, photos);
    });
  }
}
