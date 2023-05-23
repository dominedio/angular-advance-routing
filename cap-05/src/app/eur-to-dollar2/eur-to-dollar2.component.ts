import { Component } from '@angular/core';

@Component({
  selector: 'eur-to-dollar2',
  template: `
  <h1>Convertitore Euro/Dollaro</h1>
  <label for="amount">Somma in Euro da convertire</label>
  <div>
    <input
      id="amount"
      size="20"
      [ngModel]="eur"
      (ngModelChange)="update($event)"
    />
    <span style="margin-left: 10px;">
      {{ eur | currency: "EUR" }} = {{ usd | currency: "USD" }}
    </span>
  </div>
  <button (click)="update(eur + 10)">Aggiungi 10 EUR</button>
`
})
export class EurToDollar2Component {

  eur: number = 0;
  tasso: number = 1.08;
  usd: number = 0;



  update(value:number) {
    this.eur = value;
    this.usd = this.eur * this.tasso;
  }

}
