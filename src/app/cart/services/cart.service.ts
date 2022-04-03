import { Injectable } from '@angular/core';
import { Product } from 'src/app/products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];

  constructor() { }

  getCartItems(): Product[] {
    return this.cart;
  }

  addItemToCart(product: Product): void {
    this.cart.push(product);
  }
}
