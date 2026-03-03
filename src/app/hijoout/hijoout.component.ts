import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijoout',
  templateUrl: './hijoout.component.html',
  styleUrls: ['./hijoout.component.css'] 
})
export class HijooutComponent {
  @Output() mensajeEnviado = new EventEmitter<string>();

  enviarMensaje(mensaje: string) {
    this.mensajeEnviado.emit(mensaje);
  }
}
