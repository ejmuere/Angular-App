import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  template: `
    <ul>
      <li *ngFor = "let todo of todos; index as i; first as isFirst">
      <p [ngStyle] ="{'background-color': todo.status == false ? 'red' : 'green'}">
      {{isFirst + " - " + i + " - " + todo.desc}}
      </p>
      
      </li>
    </ul>
    <div *ngFor = "let todo of todos; index as i; first as isFirst">
    {{isFirst + " - " + i + " - " + todo.desc}}
    </div>
    <table style = "width:100%">
      <thead></thead>
        <tbody>
        <tr *ngFor = "let todo of todos; index as i; first as isFirst">
        <td>{{todo.id}}</td>
        <td>{{todo.username}}</td>
        <td>{{todo.status}}</td>
        <td>{{todo.targetDate}}</td>
        <td> <button type = "submit"><a href = "#">Delete</a></button></td>
        </tr>
        </tbody>
      </table>
  `,
  styles: []
})
export class NgforComponent implements OnInit {
  
  public todos = [{
    id:1,
    username:"root",
    desc:"shopping",
    status:false,
    targetDate: new Date("06/27/2019")
  },
  {
    id:2,
    username:"root",
    desc:"not liking many things",
    status:true,
    targetDate: new Date("06/27/2019")
  },
  {
    id:3,
    username:"root",
    desc:"disliking many things",
    status:true,
    targetDate: new Date("06/27/2019")
  },
  {
    id:4,
    username:"root",
    desc:"anime",
    status:false,
    targetDate: new Date("06/27/2019")
  }];
  
  constructor() { }

  ngOnInit() {
  }

}
