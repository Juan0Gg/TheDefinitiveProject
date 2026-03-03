import { Component } from '@angular/core';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.css'
})
export class FormulariosComponent {
  usuario: any = {};
  mostrar: boolean = false;
  submitForm(form: any){
    //Enviar los datos del usuario a tu servidor o ralizar acciones
    console.log("Formulario válido, datos del usuario:", this.usuario);
    this.mostrar = !this.mostrar;
    
  }
}
