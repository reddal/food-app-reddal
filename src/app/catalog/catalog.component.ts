import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogService } from '../catalog.service';
import { Sweet } from "../Sweet";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  catalog$: Observable<Sweet[]>;
  constructor(private catalog: CatalogService) {
   this.catalog$= catalog.catalog.asObservable();
  }

  ngOnInit(): void {
  }

}
