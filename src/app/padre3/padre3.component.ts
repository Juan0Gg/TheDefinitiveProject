import { Component } from '@angular/core';
import { NameService } from '../name.service';
import { Hijo3Component } from '../hijo3/hijo3.component';

@Component({
  selector: 'app-padre3',
  templateUrl: './padre3.component.html',
  styleUrl: './padre3.component.css'
})
export class Padre3Component {
  constructor(private nameService: NameService){}
    addName(name: string){
      this.nameService.addName(name);
    
  }
}
