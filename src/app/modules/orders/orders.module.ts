import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {MaterialModule} from '@osalam/shared';

import {OrdersRoutingModule} from './orders-routing.module';
import {OrderListComponent} from './order-list/order-list.component';
import { OrderNewComponent } from './order-new/order-new.component';

@NgModule({
  declarations: [OrderListComponent, OrderNewComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class OrdersModule {
}
