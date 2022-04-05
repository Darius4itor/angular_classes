import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/products/models/product.model';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() item!: CartItem;
  @Output() itemDeleted: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit(): void {
  }

  onQuantityIncrease(): void {
    this.item.quantity++;
  }

  onQuantityDecrease(): void {
    this.item.quantity--;
  }

  onDeleteItem(): void {
    this.itemDeleted.emit(this.item);
  }
}
