import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true, // Necessário para componentes standalone
  imports: [CommonModule, FooterComponent], // Adiciona CommonModule aqui
  templateUrl: '../home/home.component.html',
  styleUrls: ['./home.component.css','../../styles.css'] // Corrigido para plural
})
export class HomeComponent {}
