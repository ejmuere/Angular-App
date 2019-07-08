import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: `./ngclass.components.html`,
  styleUrls: ['./ngclass.components.css']
})
export class NgclassComponent implements OnInit {
  isBlack;
  isWhite;
  isGreen;
  isBlue;
  constructor() { }

  ngOnInit() {
  }

}
