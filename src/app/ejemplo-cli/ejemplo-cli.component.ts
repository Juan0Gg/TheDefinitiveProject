import { Component } from '@angular/core';
import { Maestro } from '../../Maestro';

@Component({
  selector: 'app-ejemplo-cli',
  templateUrl: './ejemplo-cli.component.html',
  styleUrl: './ejemplo-cli.component.css',
})
export class EjemploCLIComponent {
  ListaMaestro: Maestro[] = [
    {
      nombre: 'Juan Zárate',
      edad: 30,
      materia: 'POO',
      activo: true,
      img_url:
        'https://www.petlandflorida.com/wp-content/uploads/2022/04/shutterstock_1290320698-1-scaled.jpg',
    },
    {
      nombre: 'Juan Zárate',
      edad: 30,
      materia: 'POO',
      activo: true,
      img_url:
        'https://www.bowmanvet.com/blog/wp-content/uploads/2023/03/iStock-639961896-2000x1333.jpg',
    },
    {
      nombre: 'Juan Zárate',
      edad: 30,
      materia: 'POO',
      activo: true,
      img_url:
        'https://petvetsilverstream.co.nz/wp-content/uploads/2023/09/getting-a-puppy.jpg',
    },
    {
      nombre: 'Juan Zárate',
      edad: 30,
      materia: 'POO',
      activo: true,
      img_url:
        'https://faithfulfriendsvetclinic.com/wp-content/uploads/2023/10/puppy-kitten-hero-7.jpg',
    },
    {
      nombre: 'Juan Zárate',
      edad: 30,
      materia: 'POO',
      activo: true,
      img_url:
        'https://d.newsweek.com/en/full/2373430/puppys-adopter-backed-out-puppy-still-won.webp?w=790&f=39a788ae9a7302689e81fa121473c84f',
    },
  ];
}
