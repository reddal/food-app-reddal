import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Sweet } from './Sweet';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private _catalog: Sweet[] =
    [
      {
        id: 1,
        name: "Charlie brownie",
        type: "Brownie",
        price: 50,
        description: "deliciosa porcion de brownie de chocolate con merengue",
        stock: 5,
        quantity: 0,
        img_src: "https://i.ibb.co/ZfSzpF3/charlie-brownie.jpg",
      },
      {
        id: 2,
        name: "Tha Homer",
        type: "Donas",
        price: 130,
        description: "3 donas con glaseado rosa y chispitas de colores",
        stock: 0,
        quantity: 0,
        img_src: "https://i.ibb.co/CKz4G0k/homer-donut.jpg",
      },
      {
        id: 3,
        name: "John lemon",
        type: "Lemon pie",
        price: 80,
        description: "Es una porcion lemon pie, no hay mucho vuelta",
        stock: 10,
        quantity: 0,
        img_src: "https://i.ibb.co/NNxmTwW/john-lemon.jpg",
      },
      {
        id: 4,
        name: "Tangerine dream",
        type: "Budin de mandarinas",
        price: 150,
        description: "exquisito budin vegano de mandarinas y chía",
        stock: 2,
        quantity: 0,
        img_src: "https://i.ibb.co/v1h2Q7C/tangerine-dream.jpg",
      },
    ];
  catalog: BehaviorSubject<Sweet[]> = new BehaviorSubject([]);
  constructor() {
    this.catalog.next(this._catalog);
  }
}
