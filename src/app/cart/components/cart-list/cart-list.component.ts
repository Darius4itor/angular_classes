import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/products/models/product.model';
import { CartItem } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

  onItemDelete(event: CartItem): void {
    this.cartService.deleteItem(event);
  }

  trackByItems(index: number, item: CartItem): CartItem { return item; }

}
