import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime',
  template: `
  <img src = "https://i.pinimg.com/564x/8e/d2/40/8ed240215a0e9aab2c16eeb4a29c0af1.jpg">
  <img src = "https://i.pinimg.com/564x/a1/5d/80/a15d80e3f56446f88d00dc6617ce0528.jpg">
  <img src = "https://i.pinimg.com/564x/bd/f7/8c/bdf78c162eac5bac97335dae881357e0.jpg">
  <img src = "https://i.pinimg.com/564x/f9/4a/7e/f94a7e6e1b6ba1f7be0bdcd4722f9ad2.jpg">
  `,
  styles: []
})
export class AnimeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
