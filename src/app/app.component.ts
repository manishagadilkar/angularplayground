import { Component } from '@angular/core';
console.log('Hello');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hello = 'hello world';
  title = 'Tours of Heros!!';
  constructor()
  {
    console.log("Hello");
  }
}
