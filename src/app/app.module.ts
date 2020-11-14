import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FreshComponent } from './fresh/fresh.component';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { OrdersComponent } from './orders/orders.component';
import { BuyComponent } from './buy/buy.component';
import { IntCounterComponent } from './int-counter/int-counter.component';
import { WorkOnProgressComponent } from './work-on-progress/work-on-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    FreshComponent,
    CartComponent,
    CatalogComponent,
    OrdersComponent,
    BuyComponent,
    IntCounterComponent,
    WorkOnProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
