// app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importa o RouterModule
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [NavbarComponent, RouterModule], // Adicione o RouterModule aqui
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
