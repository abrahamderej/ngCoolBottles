import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InventoryItem } from '../models/waterbottle-inventory-item.model';

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.scss'],
})
export class InventoryItemComponent {
  @Input() item: InventoryItem | undefined;

  @Output() addItemEvent: EventEmitter<InventoryItem> = new EventEmitter();

  constructor() {}

  addToCart(): void {
    console.log(`add item to cart clicked for -> ${this.item?.itemName}`);
    this.addItemEvent.next(this.item);
  }
}
