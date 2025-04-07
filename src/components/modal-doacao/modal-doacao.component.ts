import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LogoDoarComponent } from '../logo-doar/logo-doar.component'; // ajuste o caminho conforme necessário

@Component({
  selector: 'app-modal-doacao',
  standalone: true,
  imports: [CommonModule, FormsModule, LogoDoarComponent],
  templateUrl: './modal-doacao.component.html',
  styleUrls: ['./modal-doacao.component.css']
})
export class ModalDoacaoComponent implements AfterViewInit, OnDestroy {
  @Input() ongNome: string = '';
  @Output() close = new EventEmitter<void>();

  enviado = false;
  nome: string = '';
  email: string = '';
  mensagem: string = '';

  @ViewChild('modalContent', { static: false }) modalContent!: ElementRef;
  private originalParent!: HTMLElement;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Move o modal para o document.body para evitar problemas de empilhamento
    this.originalParent = this.elementRef.nativeElement.parentElement;
    this.renderer.appendChild(document.body, this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    // Reinsere o modal em seu pai original se necessário e limpa quaisquer timers
    if (this.originalParent) {
      this.renderer.appendChild(this.originalParent, this.elementRef.nativeElement);
    }
  }

  handleSubmit(event: Event): void {
    event.preventDefault();
    this.enviado = true;
    // Exibe a mensagem de sucesso por 2 segundos e depois recarrega a página
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
}
