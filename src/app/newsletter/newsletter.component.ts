import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css'
})
export class NewsletterComponent implements OnInit {

  permiteNewsletter = false;
  textoNewsletter = '... e obtenha os melhores descontos';
  email: string = 'omar.duleu@gmail.com';

  ngOnInit(): void {
    setTimeout((): void => {
      this.permiteNewsletter = true;
    }, 5000);
  }

  mudarNewsletter(){
    this.textoNewsletter = 'Texto modificado';
  }

  digitarEmail(event: Event) {
    this.email = (<HTMLInputElement>event.target).value;
  }
}
