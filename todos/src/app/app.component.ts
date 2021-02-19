import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: "List to do"
    // Store data using this array
    public todo = [''];
    // How will you take the input
     todos = ''
    // Add functions as you fit!

    
    displayList(){
       this.todo.push(this.todos);
       
    }
  
    
  
   
  
}
