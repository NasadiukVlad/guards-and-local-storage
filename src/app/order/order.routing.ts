import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {OrderComponent} from './order.component';
import {OrderDataComponent} from './components/order-data/order-data.component';
import {OrdersListComponent} from './components/orders-list/orders-list.component';

const ORDER_ROUTES: Routes = [
  {
    path: '', component: OrderComponent, children: [
      {path: '', redirectTo: 'list'},
      {path: 'list', component: OrdersListComponent},
      {path: 'data/:id', component: OrderDataComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ORDER_ROUTES)],
  exports: [RouterModule]
})
export class OrderRoutingModule {
}




