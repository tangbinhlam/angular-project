import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Order} from '@osalam/domain';

import {OrderClientService} from '../http/order-client.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private orderClientService: OrderClientService) {
  }

  getAllOrders$(): Observable<Order[]> {
    return this.orderClientService.getAllOrders$();
  }
}
