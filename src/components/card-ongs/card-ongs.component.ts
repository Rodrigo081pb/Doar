import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDoacaoComponent } from '../modal-doacao/modal-doacao.component';
import { Ong } from '../../models/ong.interface';

@Component({
  selector: 'app-card-ong',
  standalone: true,
  imports: [CommonModule, ModalDoacaoComponent,],
  templateUrl: './card-ongs.component.html',
  styleUrls: ['./card-ongs.component.css']
})
export class CardOngComponent {
  @Input() ong!: Ong;
  mostrarModal: boolean = false;
nome: any;

  openModal(): void {
    this.mostrarModal = true;
  }

  closeModal(): void {
    this.mostrarModal = false;
  }
}
