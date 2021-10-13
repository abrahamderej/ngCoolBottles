import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { InventoryItem } from '../models/waterbottle-inventory-item.model';

@Injectable()
export class InventoryService {
  private readonly inventory: BehaviorSubject<InventoryItem[]>;

  constructor(private http: HttpClient) {
    this.inventory = new BehaviorSubject<InventoryItem[]>([]);
  }

  get inventory$(): Observable<InventoryItem[]> {
    return this.inventory.asObservable();
  }

  fetchInventory(): void {
    this.http
      .get<InventoryItem[]>('/bottles/api/inventory')
      .toPromise()
      .then((items) => {
        this.inventory.next(items);
      });
  }
}
