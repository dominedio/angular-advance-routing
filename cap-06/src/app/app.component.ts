import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  avanzamento: number = 0;
  lancio: any;
  passo: number = 10;

  constructor() {

    this.lancio = setInterval(() => {
      if ((this.avanzamento + this.passo) < 100) {
        this.avanzamento = this.avanzamento + this.passo;
      }
      else {
        this.avanzamento = 100
        clearInterval(this.lancio);
        alert("abemus papa");
      }


    }, 500);
  }

}
