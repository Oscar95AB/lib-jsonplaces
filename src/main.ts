import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { UserScreenComponent } from './apis/components/home-test/user-screen/user-screen.component';

import { HomeTestComponent } from './apis/components/home-test/home-test.component';
import { PostScreenComponent } from './apis/components/home-test/post-screen/post-screen.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    UserScreenComponent,
    PostScreenComponent,
    HomeTestComponent,
  ],
  template: `
    <app-home-test></app-home-test>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
