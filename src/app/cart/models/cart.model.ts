import { InventoryItem } from 'src/app/inventory/models/waterbottle-inventory-item.model';

export interface Cart {
  items: InventoryItem[];
  numberOfItems: number;
  total: number;
}
