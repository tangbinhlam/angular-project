import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {Order} from '@osalam/domain';

@Injectable({
  providedIn: 'root'
})
export class OrderClientService {
  // TODO will be integrate with microservice
  getAllOrders$(): Observable<Order[]> {
    const orders: Order[] = [
      {
        orderDate: new Date(),
        orderNumber: 100,
        total: 29.99,
        description: '2lbs of tuna',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 101,
        total: 39.99,
        description: '5lbs of tuna',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 102,
        total: 59.99,
        description: '1lbs of tuna',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 100,
        total: 29.99,
        description: '2lbs of tuna',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 101,
        total: 39.99,
        description: '5lbs of tuna',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 102,
        total: 59.99,
        description: '1lbs of tuna',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 100,
        total: 29.99,
        description: '2lbs of tuna',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 101,
        total: 39.99,
        description: '5lbs of tuna',
        isChecked: false
      },
      {
        orderDate: new Date(),
        orderNumber: 102,
        total: 59.99,
        description: '1lbs of tuna',
        isChecked: false
      },
    ];
    return of(orders);
  }
}
