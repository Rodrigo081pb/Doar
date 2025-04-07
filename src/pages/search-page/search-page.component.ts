import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardOngComponent } from "../../components/card-ongs/card-ongs.component";

export interface Ong {
  nome: string;
  descricao: string;
  estado: string;
  numero: string;
  gmail: string;
  horario_funcionamento: string;
  materiais_aceitos: string[];
  anos_atuacao: number;
}

@Component({
  standalone: true,
  selector: 'app-search-page',
  imports: [CommonModule, FormsModule, RouterModule, FooterComponent, CardOngComponent],
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  estadoSelecionado: string = '';
  ongs: Ong[] = [];
  isLoading: boolean = false;
  foiBuscado: boolean = false;

  async fetchOngs(): Promise<void> {
    this.isLoading = true;
    try {
      const response = await fetch('https://api.jsonbin.io/v3/b/67f07ef08960c979a57e7c81');
      const data = await response.json();
      // Filtra as ONGs pelo estado selecionado
      this.ongs = data.record.ongs.filter((ong: Ong) => ong.estado === this.estadoSelecionado);
      this.foiBuscado = true;
    } catch (error) {
      console.error('Erro ao buscar ONGs:', error);
    } finally {
      this.isLoading = false;
    }
  }
}
