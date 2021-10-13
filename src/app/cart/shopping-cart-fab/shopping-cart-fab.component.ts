import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Cart } from '../models/cart.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping-cart-fab',
  templateUrl: './shopping-cart-fab.component.html',
  styleUrls: ['./shopping-cart-fab.component.scss'],
})
export class ShoppingCartFabComponent implements OnInit, OnDestroy {
  numberOfItemsInCart = 0;

  count = 0;

  cart$: Observable<Cart>;

  subscription: Subscription | undefined;

  constructor(cartService: CartService) {
    this.cart$ = cartService.cart$;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.cart$.subscribe((cartStuff) => {
      console.log(`subscribed data -> ${++this.count}`);

      this.numberOfItemsInCart = cartStuff.numberOfItems;
    });
  }
}
