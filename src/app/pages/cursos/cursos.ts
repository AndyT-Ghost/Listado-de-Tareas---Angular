import { Component } from '@angular/core';
import { Encabezado } from '../../components/encabezado/encabezado';
import { CommonModule } from '@angular/common';

interface curso{
  id: number,
  nombre: string,
  materias: materia[],
  nivel: number,
  cursado: boolean,
  cursando: boolean
}

interface materia{
  id: number,
  nombre: string
}

@Component({
  selector: 'app-cursos',
  imports: [Encabezado, CommonModule],
  standalone: true,
  templateUrl: './cursos.html',
  styleUrl: './cursos.css',
})

export class Cursos {
  titulo = 'Panel de cursos actuales';
  nombre = 'Prueba';

  cursos: curso[] = [
    { id: 1, 
      nombre: 'Software 1', 
      materias: [{id: 1, nombre: 'Programación 1'}, {id: 2, nombre: 'Algoritmos 1'}, {id: 3, nombre: 'Base de datos 1'}],
      nivel: 1,
      cursado: true,
      cursando: false
    },
    { id: 2, 
      nombre: 'Software 2', 
      materias: [{id: 4, nombre: 'Programación 2'}, {id: 5, nombre: 'Calculo diferencial'}, {id: 6, nombre: 'Metodología 1'}],
      nivel: 1,
      cursado: true,
      cursando: false
    },
    { id: 3, 
      nombre: 'Software 3', 
      materias: [{id: 1, nombre: 'Programación 3'}, {id: 2, nombre: 'Algoritmos 2'}, {id: 3, nombre: 'Base de datos 2'}],
      nivel: 3,
      cursado: false,
      cursando: true
    },
    { id: 4, 
      nombre: 'Software 4', 
      materias: [{id: 1, nombre: 'Programación POO'}, {id: 2, nombre: 'Proceso de Software'}, {id: 3, nombre: 'Base de datos 3'}],
      nivel: 4,
      cursado: false,
      cursando: false
    },
    { id: 5, 
      nombre: 'Software 5', 
      materias: [{id: 1, nombre: 'Programación Web'}, {id: 2, nombre: 'Marco legal'}, {id: 3, nombre: 'Programación movil'}],
      nivel: 5,
      cursado: false,
      cursando: false
    }
  ]

  cambiarEstado(cr: curso){
    if(cr.cursado){
      cr.cursado = false;
      cr.cursando = false;
    }else if(cr.cursando){
      cr.cursando = false;
      cr.cursado = true;
    }else{
      cr.cursando = true;
      cr.cursado = false;
    }   
  }
}
