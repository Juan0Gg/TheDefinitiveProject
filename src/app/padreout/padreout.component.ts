import { Component } from '@angular/core';

@Component({
  selector: 'app-padreout',
  templateUrl: './padreout.component.html',
  styleUrl: './padreout.component.css'
})
export class PadreoutComponent {
  mensajeRecibido: string = "";

  recibirMensaje(mensaje: string){
    this.mensajeRecibido = mensaje;
  }
}
