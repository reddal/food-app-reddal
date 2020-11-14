import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { CatalogService } from '../catalog.service';
import { Sweet } from "../Sweet";
@Component({
  selector: 'app-fresh',
  templateUrl: './fresh.component.html',
  styleUrls: ['./fresh.component.scss']
})
export class FreshComponent implements OnInit {
  catalog$: Observable<Sweet[]>;
  constructor(private cart: CartService, private catalog: CatalogService,) {
    this.catalog$ = catalog.catalog.asObservable();
  }
  addToCart(sweet: Sweet): void {
    this.cart.addToCart(sweet);
    sweet.stock -= sweet.quantity;
    sweet.quantity = 0;
  }
  ngOnInit(): void {
  }

}