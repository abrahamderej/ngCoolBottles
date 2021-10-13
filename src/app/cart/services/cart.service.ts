import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { InventoryItem } from 'src/app/inventory/models/waterbottle-inventory-item.model';
import { Cart } from '../models/cart.model';

const CART_KEY = 'ngWaterBottleCart';

@Injectable()
export class CartService {
  private readonly cart: BehaviorSubject<Cart>;

  get cart$(): Observable<Cart> {
    return this.cart.asObservable();
  }

  constructor() {
    CART_KEY;

    const initial: Cart =
      localStorage.getItem(CART_KEY) === null
        ? {
            numberOfItems: 0,
            items: [],
            total: 0,
          }
        : JSON.parse(localStorage.getItem(CART_KEY) as any);

    this.cart = new BehaviorSubject<Cart>(initial);
  }

  addToCart(item: InventoryItem): void {
    console.log(`item add to cart service -> ${item.itemName}`);

    const currentCart = this.cart.getValue();

    const newItemCollection: InventoryItem[] = [...currentCart.items, item];

    const newCart: Cart = {
      numberOfItems: newItemCollection.length,
      total: currentCart.total + item.itemCost,
      items: newItemCollection,
    };

    localStorage.setItem(CART_KEY, JSON.stringify(newCart));

    this.cart.next(newCart);
  }

  removeItemFromCart(item: InventoryItem): void {
    const itemsWithoutRemovedItem = this.cart
      .getValue()
      .items.filter((x) => x.itemName !== item.itemName);

    const newCart = {
      total: this.cart.getValue().total - item.itemCost,
      numberOfItems: itemsWithoutRemovedItem.length,
      items: itemsWithoutRemovedItem,
    };

    localStorage.setItem(CART_KEY, JSON.stringify(newCart));

    this.cart.next(newCart);
  }
}
