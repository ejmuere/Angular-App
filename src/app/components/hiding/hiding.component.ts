import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hiding',
  template: `
    <input type = "submit" (click)="method()"/>
    <div [hidden] = "divStatus">
    Content is in div
    </div>
  `,
  styles: []
})
export class HidingComponent implements OnInit {
  divStatus = false;
  constructor() { }

  ngOnInit() {
  }

  method(){
    this.divStatus = !this.divStatus;
  }

}
