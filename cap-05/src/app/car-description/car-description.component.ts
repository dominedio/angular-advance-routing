import { Component, OnInit } from '@angular/core';
import { TmplAstVariable } from '@angular/compiler';
import { constructor } from 'events';


@Component({
  selector: 'app-car-description',
  template: `
    <h1 [textContent]="car.model"></h1>
    <h1 [textContent]="car.anno"></h1>
    <br>
    <button [disabled]="!car.available">Compra</button>
  `,

})
export class CarDescriptionComponent implements OnInit {
  car:any= {
    model: "jaguar_S-type",
    anno:"2001",
    available:false
   }

 

  constructor() {
    setTimeout(()=>{
      this.car.model= "fiat panda";
      this.car.anno="1990";
      this.car.available=true;
    },6000);
   }

  ngOnInit() {
  }

}
