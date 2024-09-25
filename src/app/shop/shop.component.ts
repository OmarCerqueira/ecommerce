import { Component } from '@angular/core';
import { ShopSidebarComponent } from './shop-sidebar/shop-sidebar.component';
import { ShopContentComponent } from './shop-content/shop-content.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ShopSidebarComponent, ShopContentComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

  
}
