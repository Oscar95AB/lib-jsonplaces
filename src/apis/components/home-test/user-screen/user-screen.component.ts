import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DetailUser } from './../../../../apis/jsonplace/interfaces/user';
import { RestUsersService } from './../../../../apis/jsonplace/rest-user.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-user-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css'],
})
export class UserScreenComponent implements OnInit {
  listUsers: DetailUser[] = [];
  listPosts: any[] = [];
  constructor(private _restUser: RestUsersService) {
    forkJoin({
      users: this._restUser.getAllUsers(),
      // posts: this._restPost.getAllPosts(),
    }).subscribe((resp) => {
      this.listUsers = resp.users as any;
      // this.listPosts = resp.posts;
    });
  }

  getUser(id: number) {
    this._restUser.getUserId(id).subscribe((user) => {
      console.log('Usuario:' + id, user);
    });
  }

  getAllUsers() {
    this._restUser.getAllUsers().subscribe((users) => {
      console.log('Todos los usuarios', users);
    });
  }

  postUser() {
    const user = {
      id: 0,
      name: 'Joselito',
      username: 'El cantaor',
      email: 'joselito_cantaor@email.es',
      phone: '+34668597845',
      website: 'https://ww',
      address: {
        street: 'madrid',
        suite: 'madrid',
        city: 'madrid',
        zipcode: 'madrid',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      company: {
        bs: 'harness real-time e-markets',
        catchPhrase: 'Multi-layered client-server neural-net',
        name: 'Romaguera-Crona',
      },
    };
    this._restUser.postUser(user).subscribe((user) => {
      console.log('Usuario Creado:', user);
    });
  }
  putUser(user: DetailUser) {
    this._restUser.putUser(user).subscribe((user) => {
      console.log('Usuario Modificado:', user);
    });
  }
  deleteUser(id: number) {
    this._restUser.deleteUser(id).subscribe((user) => {
      console.log('Usuario Borrado', user);
    });
  }
  filtrar() {
    const filtros = {
      address: {
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
    };
    this._restUser.filterUser(filtros).subscribe((user) => {
      console.log('Usuarios Filtrado', user);
    });
  }

  // Catalogo
  getUserAlbum(id: number) {
    this._restUser.getUserAlbum(id).subscribe((Albums) => {
      console.log('Album de Usuario 1', Albums);
    });
  }
  getUserTodo(id: number) {
    this._restUser.getUserTodo(id).subscribe((Albums) => {
      console.log('Todo de Usuario 1', Albums);
    });
  }
  getUserPosts(id: number) {
    this._restUser.getUserPosts(id).subscribe((Albums) => {
      console.log('POSTS de Usuario 1', Albums);
    });
  }
  getUserComments(id: number) {
    this._restUser.getUserComments(id).subscribe((Albums) => {
      console.log('COMMENTS de Usuario 1', Albums);
    });
  }

  ngOnInit() {}
}
