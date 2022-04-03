import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/cart/services/cart.service';
import { ProductService } from 'src/app/products/services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(public productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
  }

  onAddToCart(product: Product): void {
    this.cartService.addItemToCart(product);
  }

}
