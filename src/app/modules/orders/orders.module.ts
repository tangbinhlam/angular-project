import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrdersRoutingModule} from './orders-routing.module';
import {OrderListComponent} from './order-list/order-list.component';
import {MaterialModule} from '../../shared/material-module';


@NgModule({
  declarations: [OrderListComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MaterialModule,
  ]
})
export class OrdersModule {
}
