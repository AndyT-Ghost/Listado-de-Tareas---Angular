import { Component } from '@angular/core';
import { Encabezado } from '../../components/encabezado/encabezado';

@Component({
  selector: 'app-cursos',
  imports: [Encabezado],
  standalone: true,
  templateUrl: './cursos.html',
  styleUrl: './cursos.css',
})
export class Cursos {
  titulo = 'Cursos actuales';
  nombre = 'Prueba';
}
