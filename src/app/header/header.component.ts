import { Component } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { PageMenuComponent } from './page-menu/page-menu.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TopBarComponent,
    HeaderMainComponent,
    MainNavComponent,
    PageMenuComponent,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
