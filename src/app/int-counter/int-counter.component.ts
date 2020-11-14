import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-int-counter',
  templateUrl: './int-counter.component.html',
  styleUrls: ['./int-counter.component.scss']
})
export class IntCounterComponent implements OnInit {

  constructor() { }

  @Input() quantity: number = 0;
  @Input() max: number;
  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
  increaseQuantity() {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

}
