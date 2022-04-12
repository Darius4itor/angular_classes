import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
