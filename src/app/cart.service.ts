import { Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Sweet } from './Sweet';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }
  private _cartList: Sweet[] = [];
  cartList: BehaviorSubject<Sweet[]> = new BehaviorSubject([]);
  private _totalPrice: number = 0;
  totalPrice: BehaviorSubject<number> = new BehaviorSubject(0);

  addToCart(sweet: Sweet) {
    let item: Sweet = this._cartList.find(sweetOfCart => sweetOfCart.id == sweet.id);
    if (!item) {
      this._cartList.push({ ...sweet });
    } else {
      item.quantity += sweet.quantity;
    }
    this._totalPrice = this._totalPrice + sweet.price * sweet.quantity;
    this._cartList.forEach(element => {
      console.log(element.name + " cantidad: " + element.quantity + " total: " + this._totalPrice);
      this.cartList.next(this._cartList); //cambia el valor de cartList al valor actual de _cartlist y emite evento
      this.totalPrice.next(this._totalPrice);
    });
  }

}
