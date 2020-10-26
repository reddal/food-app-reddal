import { Component, OnInit } from '@angular/core';
import { Sweet } from "../Sweet";
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  catalog: Sweet[] =
    [
      {
        name: "Charlie brownie",
        type: "Brownie",
        price: 50,
        description: "deliciosa porcion de brownie de chocolate con merengue",
        stock: 5,
      },
      {
        name: "Tha Homer",
        type: "Donas",
        price: 130,
        description: "3 donas con glaseado rosa y chispitas de colores",
        stock: 0,
      },
      {
        name: "John lemon",
        type: "Lemon pie",
        price: 80,
        description: "Es una porcion lemon pie, no hay mucho vuelta",
        stock: 10,
      },
      {
        name: "Tangerine dream",
        type: "Budin de mandarinas",
        price: 150,
        description: "mermeladamermeladamermeladamermeladamermelada",
        stock: 2,
      },
    ]
constructor() { }

ngOnInit(): void {
}

}
