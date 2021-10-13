import { Component, OnInit } from '@angular/core';
import { InventoryItem } from 'src/app/inventory/models/waterbottle-inventory-item.model';
import { Cart } from '../models/cart.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss'],
})
export class CartViewComponent implements OnInit {
  cart: Cart | undefined;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe((cartData) => {
      this.cart = cartData;
    });
  }

  remove(item: InventoryItem): void {
    this.cartService.removeItemFromCart(item);
  }
}
