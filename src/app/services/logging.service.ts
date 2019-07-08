import { Injectable } from '@angular/core';
import { LOGS } from './mocks.log';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }


  log(message){
    console.log(message)
  }

  getLog(): any[]{
    return LOGS;


  }
}
