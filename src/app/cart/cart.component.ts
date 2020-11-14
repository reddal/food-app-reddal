import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { Sweet } from '../Sweet';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  totalPrice$: Observable<number>;
  cartList$: Observable<Sweet[]>;
  constructor(private cart: CartService) 
  {
    this.cartList$=cart.cartList.asObservable();
    this.totalPrice$=cart.totalPrice;
    console.log(this.totalPrice$);
  }

  ngOnInit(): void {
  }

}
