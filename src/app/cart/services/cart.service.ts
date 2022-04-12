import { Injectable } from '@angular/core';
import { Product } from 'src/app/products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // думаю, что тип должен включать еще и количество товара
  private cart: Product[] = [];

  constructor() { }

  getCartItems(): Product[] {
    return this.cart;
  }

  addItemToCart(product: Product): void {
    this.cart.push(product);
  }
}
