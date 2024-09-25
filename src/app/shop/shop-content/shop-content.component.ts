import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-content',
  standalone: true,
  imports: [],
  templateUrl: './shop-content.component.html',
  styleUrl: './shop-content.component.css'
})
export class ShopContentComponent {

 qtdadeProdutos: number = 435;

 getQtdadeProdutos(): number {
  return this.qtdadeProdutos;
 }
}
