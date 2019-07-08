import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaydb',
  template: `
    <input type = "text" [(ngModel)]= "name"/><br>
    {{name}}
    <p>
      twowaydb works!
    </p>
  `,
  styles: []
})
export class TwowaydbComponent implements OnInit {
  name:string;
  pi: number = 3.14;
  constructor() {
    this.name = "edwin";
   }

  ngOnInit() {
  }

}
