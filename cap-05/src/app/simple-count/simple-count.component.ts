import { Component } from '@angular/core';

@Component({
  selector: 'simple-counter',
  template: `
    <button (click)="incrementa()">+1</button>
    <span>Count: {{ count }}</span>
  `,
  styles: []
})
export class SimpleCountComponent {

  count: number = 0;

  incrementa() {
    this.count = this.count + 1
  };




}
