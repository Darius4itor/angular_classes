import { Injectable } from '@angular/core';
import { Product } from 'src/app/products/models/product.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[] = [];

  constructor() { }

  get totalCost(): number {
    return this.cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  get totalQuantity(): number {
    return this.cart.length;
  }

  getCartItems(): CartItem[] {
    return this.cart;
  }

  deleteItem(item: CartItem) {
    let index = this.cart.indexOf(item);
    if(index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  addItemToCart(product: Product): void {
    let temp = this.cart.find(x => x.product === product);
    if(temp) {
      temp.quantity++;
    } else {
      this.cart.push(new CartItem(product, 1));
    }
  }
}
