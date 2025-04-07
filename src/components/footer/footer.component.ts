import { Component } from '@angular/core';
import { LogoDoarComponent } from "../logo-doar/logo-doar.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  imports: [LogoDoarComponent]
})
export class FooterComponent { }
