import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from '../app/header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProdcutListComponent } from './products/prodcut-list/prodcut-list.component';
import { ProdcutDetailComponent } from './products/prodcut-detail/prodcut-detail.component';
import { ProdcutItemComponent } from './products/prodcut-list/prodcut-item/prodcut-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProdcutListComponent,
    ProdcutDetailComponent,
    ProdcutItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
