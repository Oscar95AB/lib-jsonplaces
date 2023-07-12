import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlbumScreenComponent } from './album-screen/album-screen.component';
import { PostScreenComponent } from './post-screen/post-screen.component';
import { UserScreenComponent } from './user-screen/user-screen.component';

@Component({
  selector: 'app-home-test',
  standalone: true,
  imports: [
    CommonModule,
    UserScreenComponent,
    PostScreenComponent,
    AlbumScreenComponent,
  ],
  templateUrl: './home-test.component.html',
  styleUrls: ['./home-test.component.css'],
})
export class HomeTestComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
