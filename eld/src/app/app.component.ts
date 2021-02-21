import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Learn Zone';
  public sentence = [''];
  // How will you take the input
  complete = ''
  // Add functions as you fit!

   
   
   public sentence2 = [''];
   complete2 = ''
   sentence3 =[''];
   complete3 = ''
   sentence4=[''];
   complete4=''
   inwriting1=[''];
   writing1=''
   completeSentence(){
    this.sentence.push(this.complete);
 }
 compSen(){
  this.sentence2.push(this.complete2);
 }
 compSen3(){
   this.sentence3.push(this.complete3);
 }
 compSen4(){
   this.sentence4.push(this.complete4);
 }
 writing(){
   this.inwriting1.push(this.writing1);
   alert(" The correct Answer is: The boy and girl are swimming in the pool");
 }
}
