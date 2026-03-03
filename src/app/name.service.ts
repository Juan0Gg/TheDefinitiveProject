import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  private names: string[] = [];
  getNames(){
    return this.names;
  }
  addName(name: string){
    this.names.push(name);
  }
  constructor() { }
}