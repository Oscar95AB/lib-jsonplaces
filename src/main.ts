import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { UserScreenComponent } from './apis/components/user-screen/user-screen.component';
// import { UserScreenComponent } from './apis/components/user-screen/user-screen.component';
// import { RestUsersService } from './apis/jsonplace/rest-user.service';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, UserScreenComponent],
  template: `
    <app-user-screen></app-user-screen>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
