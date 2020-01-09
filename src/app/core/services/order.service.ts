import {Injectable} from '@angular/core';
import {OrderClientService} from '../http/order-client.service';
import {Observable} from 'rxjs';
import Order from '../../domain/models/order.model';

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
