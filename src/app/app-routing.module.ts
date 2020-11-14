import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyComponent } from './buy/buy.component';
import { CatalogComponent } from './catalog/catalog.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/buy-now',
    pathMatch:'full',
  },
  {
    path:'buy-now',
    component:BuyComponent,
  },
  {
    path:'catalog',
    component:CatalogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
