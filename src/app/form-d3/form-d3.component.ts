import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-d3',
  templateUrl: './form-d3.component.html',
  styleUrl: './form-d3.component.css'
})
export class FormD3Component {
  registroForm: FormGroup;
  MostrarDatos: boolean = false;

  constructor(private formBuilder: FormBuilder){
    this.registroForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      fecha: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      direccion: ['', Validators.required],
    });
  }
  onSubmit(){
    if(this.registroForm && this.registroForm.valid){
      console.log("Formulario valido. Datos:");
      console.log("Nombre: ", this.registroForm.value.nombre);
      console.log("Correo electrónico: ", this.registroForm.value.email);
      console.log("Contraseña: ", this.registroForm.value.password);
      console.log("Telefono: ", this.registroForm.value.telefono)
      console.log("Direccion: ", this.registroForm.value.direccion)
      this.MostrarDatos = true
    }else{
      console.error("Formulario invalido. Por favor, completa todos los campos correctamente");
      
    }
  }

}
