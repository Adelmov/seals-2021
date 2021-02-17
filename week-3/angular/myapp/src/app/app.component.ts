import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  age = '';
  // DisplayAge() {
  //   let age = age 
  // }

  todos= [' eat breakfast', 'shower ', 'code']
  imageShows= false;
  displayImage(){
    this.imageShows = true;
  }
}

