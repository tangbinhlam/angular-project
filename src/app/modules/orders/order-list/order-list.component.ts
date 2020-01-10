import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

import {OrderService} from '@osalam/core';
import {Order} from '@osalam/domain';

@Component({
  selector: 'osalam-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.less']
})
export class OrderListComponent implements OnInit {

  displayedColumns: string[] = ['action', 'orderNumber', 'orderDate', 'description', 'total'];
  ELEMENT_DATA: Order[] = [];
  dataSource: MatTableDataSource<Order>;

  length = 100;
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [1, 2, 5, 10];
  sum = 0;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderService.getAllOrders$().subscribe(orders => {
      this.ELEMENT_DATA = orders;
      this.loadData(0, this.pageSize);
      this.dataSource.sort = this.sort;
    });
  }

  onPageChange(e) {
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    this.loadData(this.pageIndex, this.pageSize);
  }

  loadData(pageIndex, pageSize) {
    this.dataSource = new MatTableDataSource<Order>(this.ELEMENT_DATA.slice(pageIndex, pageIndex + pageSize));
    this.sum = 0;
    this.dataSource.data.map( order => order.total).forEach( total => {
      this.sum = this.sum + total;
    });
  }

  selectAll() {
    this.ELEMENT_DATA.forEach(elm => {
      elm.isChecked = !elm.isChecked;
    });
  }
}
