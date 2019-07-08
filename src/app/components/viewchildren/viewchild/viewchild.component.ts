import { Component, OnInit, Directive, Input, ViewChild } from '@angular/core';

//child componenet - creating a component or directive
@Directive({selector:'pane'})
export class Pane{
  @Input() id: string;
}
@Component({
  selector: 'app-viewchild',
  template:`
  <pane id ="1" *ngIf = "shouldShow"><img [src] = img1> </pane>
  <pane id ="2" *ngIf = "!shouldShow"> <img [src] = img2></pane>
  <button (click)="toggle()"> Toggle</button>
  <p>Pane loaded: {{selectedPane}}</p>
  `,
  styles: []
})
export class ViewchildComponent implements OnInit {
  shouldShow:boolean = true;
  img1 = "https://i.pinimg.com/originals/bf/7a/17/bf7a1790a387bc3843ddeca0354f32b5.jpg";
  img2 = "https://i.pinimg.com/564x/d9/31/a2/d931a2cf990eac128a08e592e1dd5d84.jpg";
  selectPane:string;
  constructor() { }

  ngOnInit() {
  }
  @ViewChild(Pane,{static:false})
  set pane(v:Pane){
    setTimeout( () =>{this.selectPane = v.id},0);

  }

  toggle(){
    this.shouldShow = !this.shouldShow;
  }

}
