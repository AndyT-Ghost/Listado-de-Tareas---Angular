import { Component } from '@angular/core';
import { Encabezado } from '../../components/encabezado/encabezado';

@Component({
  selector: 'app-calculadora',
  imports: [Encabezado],
  standalone: true,
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {
  titulo = 'Calcualdora estudiantil';
  nombre = 'Andy Zurita'
}
