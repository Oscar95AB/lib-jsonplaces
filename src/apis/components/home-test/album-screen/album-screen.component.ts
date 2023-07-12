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
  // postPost() {
  //   const post: Post = {
  //     body: 'prueba',
  //     id: 0,
  //     title: 'prueba',
  //     userId: 1,
  //   };
  //   this._restAlbum.postPost(post).subscribe((postResp) => {
  //     console.log('Post post:' + post.body, postResp);
  //   });
  // }
  // putPost() {
  //   const post: Post = {
  //     body: 'prueba',
  //     id: 1,
  //     title: 'prueba',
  //     userId: 1,
  //   };
  //   this._restAlbum.putPost(post).subscribe((postResp) => {
  //     console.log('Put post:' + post, postResp);
  //   });
  // }
  // deletePost(id: number) {
  //   this._restAlbum.getPostId(id).subscribe((post) => {
  //     console.log('Delete post:' + id, post);
  //   });
  // }
  // getPostComments(id: number) {
  //   this._restAlbum.getPostComments(id).subscribe((comments) => {
  //     console.log('Comments del Post:' + id, comments);
  //   });
  // }
}
