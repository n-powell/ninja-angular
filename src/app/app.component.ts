import { Component } from '@angular/core';
import { HomeComponent } from './home/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [HomeComponent]
})
export class AppComponent {
  title = 'app works ding dong!';
  name= 'Jason';
  ninja = {
    name: "Nick",
    belt: "red"
  };
}
