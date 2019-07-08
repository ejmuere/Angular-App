import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  template: `
    <div [ngSwitch] = "page">
      <app-databindings *ngSwitchCase = "1"> Paragraph 1 </app-databindings>
      <app-ngfor *ngSwitchCase = "2"> Paragraph 2 </app-ngfor>
      <app-twowaydb *ngSwitchCase = "3"> Paragraph 3 </app-twowaydb>
      <app-ngclass *ngSwitchCase = "4"> Paragraph 3 </app-ngclass>
      <app-anime *ngSwitchCase = "5"> Paragraph 3 </app-anime>
      <app-ngpipe *ngSwitchCase = "6"> Paragraph 3 </app-ngpipe>
      <app-voteparent *ngSwitchCase = "7"> Paragraph 3 </app-voteparent>
      <app-viewchild *ngSwitchCase = "8"> Paragraph 3 </app-viewchild>
      <app-loggingcomponent *ngSwitchCase = "9"> Paragraph 3 </app-loggingcomponent>
      <app-httpbin *ngSwitchCase = "10"> Paragraph 3 </app-httpbin>
    </div>
    <button (click) = method(1)> For pictures </button>
    <button (click) = method(2)> To do List</button>
    <button (click) = method(3)> Showing words</button>
    <button (click) = method(4)> Class</button>
    <button (click) = method(5)> Anime</button>
    <button (click) = method(6)> Pipes</button>
    <button (click) = method(7)> VOTE</button>
    <button (click) = method(8)> view child</button>
    <button (click) = method(9)> logging service</button>
    <button (click) = method(10)> httpbin</button>
    
  `,
  styles: []
})
export class NgswitchComponent implements OnInit {
  page: number = 0;
  constructor() { }

  ngOnInit() {
  }
  method(val){
    this.page = val;
  }

}
