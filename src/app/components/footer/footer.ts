import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})

export class Footer {
  mensaje = 'Aplicación desarrollada por Andy Zurita - DAWA 7-4';
}
