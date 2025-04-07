import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoDoarComponent } from '../logo-doar/logo-doar.component';
import { ButtonBuscarOngsComponent } from '../button-buscar-ongs/button-buscar-ongs.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    LogoDoarComponent,
    ButtonBuscarOngsComponent,
    RouterModule
  ],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isOpen: boolean = false;

  @ViewChild('dropdown') dropdownRef!: ElementRef;
  @ViewChild('button') buttonRef!: ElementRef;

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:mousedown', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const target = event.target as Node;

    if (
      this.isOpen &&
      this.dropdownRef &&
      this.buttonRef &&
      !this.dropdownRef.nativeElement.contains(target) &&
      !this.buttonRef.nativeElement.contains(target)
    ) {
      this.isOpen = false;
    }
  }

}

