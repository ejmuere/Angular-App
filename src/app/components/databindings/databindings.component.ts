import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databindings',
  template: `
    <p>
      {{greetings}} Search up "anime girl" for a suprise ;)! <br>
      <input type = "text" [(ngModel)] = defaultValue />
      <input type = "submit" (click) = "display();"/><br>
      <img [src] = imageURL alt = "no image"/>
    </p>
  `,
  styles: ["p(color:green;)"]
})
export class DatabindingsComponent implements OnInit {
  greeting = "Hello testing";
  defaultValue = "name";
  animegirls = "https://66.media.tumblr.com/d42b96f91d49aa8f70f3d9a54b659504/tumblr_phmijbEp561sjipjm_540.jpg";
  animegirl = "https://i.pinimg.com/564x/b9/89/ab/b989ab4a0db3b9c836119d5175e3997c.jpg";
  theBestCharacter = "https://data.whicdn.com/images/75699686/original.gif";
  imageURL;
  constructor() {
    this.imageURL = "";
   }

  ngOnInit() {
  }

  display(){
    if(this.defaultValue == "anime girls")
    this.imageURL = this.animegirls;
    else  if(this.defaultValue == "anime girl")
      this.imageURL =this.animegirl;
    else if(this.defaultValue == "the best character")
      this.imageURL =this.theBestCharacter;
    else
      this.imageURL = "";
    console.log(this.defaultValue);
  }

}
