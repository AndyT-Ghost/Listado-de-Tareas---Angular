import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Encabezado } from '../../components/encabezado/encabezado';

interface Tarea{
  id: number,
  materia: string,
  actividad: string,
  completada: boolean,
  prioridad: string
}

@Component({
  selector: 'app-task-planner',
  imports: [CommonModule, Encabezado],
  standalone: true,
  templateUrl: './task-planner.html',
  styleUrl: './task-planner.css',
})

export class TaskPlanner {
  titulo = 'Listado de tareas';
  nombre = 'Prueba';
  mostrarDescripcion = true;

  tareas: Tarea[] = [
    {id: 1, materia: 'Desarrollo de Aplicaciones Web', actividad: 'Desarrollo en Angular', completada: false, prioridad: 'Alta'},
    {id: 2, materia: 'Marco Legal de la Profesión', actividad: 'Investigación de contratos', completada: false, prioridad: 'Media'},
    {id: 3, materia: 'Ingles y Cultura', actividad: 'Activides de plataforma', completada: false, prioridad: 'Media'},
    {id: 4, materia: 'Metodología de la Investigación', actividad: 'Investigación de Problemática', completada: true, prioridad: 'Baja'},
    {id: 5, materia: 'Desarrollo de Aplicaciones Web', actividad: 'Nivelación para Angular', completada: true, prioridad: 'Media'},
    {id: 6, materia: 'Inteligencia de Negocios', actividad: 'Plataforma de BI', completada: false, prioridad: 'Media'}
  ]

  cambiarEstado(tarea: Tarea){
    tarea.completada = !tarea.completada;
  }

  alternarDescripcion(){
    this.mostrarDescripcion = !this.mostrarDescripcion;
  }
}
