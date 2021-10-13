import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { CartService } from 'src/app/cart/services/cart.service';
import { InventoryItem } from '../models/waterbottle-inventory-item.model';
import { InventoryService } from '../services/inventory.service';

import { InventoryListComponent } from './inventory-list.component';

// mock === fake

describe('InventoryListComponent', () => {
  let mockInventoryService: jasmine.SpyObj<InventoryService>;
  let mockCartService: any;

  let component: InventoryListComponent;
  let fixture: ComponentFixture<InventoryListComponent>;

  beforeEach(async () => {
    mockInventoryService = jasmine.createSpyObj('InventoryService', ['fetchInventory'], ['inventory$']);

    mockCartService = {
      addToCart: () => { return null; }
    }

    await TestBed.configureTestingModule({
      declarations: [InventoryListComponent],
      providers: [
        { provide: CartService, useValue: mockCartService}, 
        { provide: InventoryService, useValue: mockInventoryService }
      ]
    }).compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryListComponent);
    component = fixture.componentInstance;
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should get inventory data and display', () => {

    const inventoryItems: InventoryItem[] = [
      {
        itemName: 'mock-name-1',
        itemCost: 1,
        itemDesc: 'mock-desc-1'
      },
      {
        itemName: 'mock-name-2',
        itemCost: 2,
        itemDesc: 'mock-desc-2'
      }
    ];

    const mockObservable: Observable<InventoryItem[]> = of(inventoryItems);

    //@ts-ignore
    Object.getOwnPropertyDescriptor(mockInventoryService, 'inventory$').get.and.returnValue(mockObservable);

    fixture.detectChanges();

    expect(mockInventoryService.fetchInventory).toHaveBeenCalledTimes(1);

    const itemListEls: Element[] = fixture.nativeElement.querySelectorAll('.item-list__item');

    expect(itemListEls.length).toEqual(2);

  });

});
