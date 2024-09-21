import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ViewedComponent } from './viewed/viewed.component';
import { BrandsComponent } from './brands/brands.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    HeaderComponent,
    ViewedComponent,
    BrandsComponent,
    FooterComponent,
    CopyrightComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';

  // // Método que retorna a quantidade de produtos
  // getQtdeProdutos(): number {
  //   return this.produtos.length;  // Retorna o número de produtos
  // }
}
