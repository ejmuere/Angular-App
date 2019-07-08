import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngpipe',
  template: `
    <p>
      ngpipe works! {{name|uppercase}}

      DOB : {{dates | date:'short'}}
      A:{{a|currency:'USD':false}}
      B:{{b|currency:'USD':true:'4.2-2'}}
      Exponential:{{num|exponentialStrength:5}}
    </p>
  `,
  styles: []
})
export class NgpipeComponent implements OnInit {
  name:string = "edwin";
  dates = new Date("06/12/1997")
  a: number =0.259;
  b: number = 1.3495;
  num:number = 5;
  constructor() { }

  ngOnInit() {
  }

}
