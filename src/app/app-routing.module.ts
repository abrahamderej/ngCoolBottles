import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartViewComponent } from './cart/cart-view/cart-view.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';

const routes: Routes = [
  { path: 'waterbottle/inventory', component: InventoryListComponent },
  { path: 'waterbottle/cart', component: CartViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
