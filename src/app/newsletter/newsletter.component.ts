import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { getActiveConsumer } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css'
})
export class NewsletterComponent implements OnInit {

  permiteNewsletter = false;
  textoNewsletter = '... e obtenha os melhores descontos';
  email: string = 'omar.duleu@gmail.com';
  emailEnviado = false;

  ngOnInit(): void {
    setTimeout((): void => {
      this.permiteNewsletter = true;
    }, 5000);
  }

  mudarNewsletter(){
    this.textoNewsletter = 'Texto modificado';
    this.emailEnviado = true;
  }

  digitarEmail(event: Event) {
    this.email = (<HTMLInputElement>event.target).value;
  }

  // getCor() {
  //   if (this.emailEnviado){
  //     return 'green';
  //   } else {
  //     return 'orange';
  //   }
  // }
}
