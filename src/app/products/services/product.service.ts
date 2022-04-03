import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      'name': 'Apple',
      'description': 'Just an apple',
      'price': 10,
      'isAvailable': true
    },
    {
      'name': 'Grape',
      'description': 'Just an grape',
      'price': 15,
      'isAvailable': true
    },
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
