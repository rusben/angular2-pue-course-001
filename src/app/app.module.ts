import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ProductList }  from './product-list/product-list.component';
import { MyNavbarComponent }  from './my-navbar/my-navbar.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ProductList, MyNavbarComponent ],
  bootstrap:    [ AppComponent ]
  //bootstrap:    [ ProductList ]
  
})
export class AppModule { }
