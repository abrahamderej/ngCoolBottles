import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { InventoryItem } from '../models/waterbottle-inventory-item.model';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss'],
})
export class InventoryListComponent implements OnInit {
  data: InventoryItem[] = [];

  constructor(
    private cartService: CartService,
    private inventoryService: InventoryService
  ) {}

  ngOnInit(): void {
    this.inventoryService.inventory$.subscribe((inventory) => {
      this.data = inventory;
    });

    this.inventoryService.fetchInventory();
  }

  onAddItemEvent(item: InventoryItem): void {
    console.log(`list component received item -> ${item.itemName}`);

    this.cartService.addToCart(item);
  }
}
