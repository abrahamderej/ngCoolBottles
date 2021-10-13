import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './services/cart.service';
import { ShoppingCartFabComponent } from './shopping-cart-fab/shopping-cart-fab.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { CartViewComponent } from './cart-view/cart-view.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [ShoppingCartFabComponent, CartViewComponent],
  exports: [ShoppingCartFabComponent, CartViewComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatBadgeModule,
    MatListModule,
    MatDividerModule,
  ],
  providers: [CartService],
})
export class CartModule {}
