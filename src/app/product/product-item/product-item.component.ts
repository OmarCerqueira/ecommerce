import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

  // produtos = ['TV', 'Radio', 'Fone', 'Microondas', 'Fogão'];

  produtos = [
    { nome: 'Computador', preco: 458.56 },
    { nome: 'Fogão', preco: 487.52 },
    { nome: 'Geladeira', preco: 521.25 },
    { nome: 'Notebook', preco: 215.23 },
    { nome: 'Cama', preco: 459.69 }
  ];



}
