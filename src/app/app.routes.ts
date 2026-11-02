import { Routes } from '@angular/router';
import { TaskPlanner } from './pages/task-planner/task-planner';
import { Calculadora } from './pages/calculadora/calculadora';
import { Cursos } from './pages/cursos/cursos';

export const routes: Routes = [
    {path: 'inicio', component: TaskPlanner},
    {path: 'calculadora', component: Calculadora},
    {path: 'cursos', component: Cursos},
    {path: '', redirectTo: 'inicio', pathMatch: 'full'}
];
