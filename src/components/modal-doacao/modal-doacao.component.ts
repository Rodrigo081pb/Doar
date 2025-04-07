import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  Renderer2
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LogoDoarComponent } from "../logo-doar/logo-doar.component";

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
  private timeoutId: any;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Move o modal para o document.body para evitar problemas de empilhamento
    this.originalParent = this.elementRef.nativeElement.parentElement;
    this.renderer.appendChild(document.body, this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    // Se houver timeout pendente, limpa o timer
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  // Método chamado na submissão do formulário
  handleSubmit(event: Event): void {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    this.enviado = true;
    // Após 2 segundos, fecha o modal emitindo o evento
    this.timeoutId = setTimeout(() => {
      this.onClose();
    }, 2000);
  }

  // Emite o evento de fechamento para o componente pai
  onClose(): void {
    this.close.emit();
  }
}



