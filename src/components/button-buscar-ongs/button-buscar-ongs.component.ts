// button-buscar-ongs.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule], // Adicione o RouterModule aqui
  selector: 'app-button-buscar-ongs',
  templateUrl: './button-buscar-ongs.component.html',
  styleUrls: ['./button-buscar-ongs.component.css']
})
export class ButtonBuscarOngsComponent {}
