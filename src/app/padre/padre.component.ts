import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  @Input() nombre?:string;
  NombreDelPadre: string = "";
  CambiarNombre(nombre:string){
    this.NombreDelPadre = nombre;
  }
}
