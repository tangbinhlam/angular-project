import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from './shared/components/layout';


const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'customers',
        loadChildren: './modules/customers/customers.module#CustomersModule',
      },
      {
        path: 'messages',
        loadChildren: './modules/messages/messages.module#MessagesModule',
      },
      {
        path: 'orders',
        loadChildren: './modules/orders/orders.module#OrdersModule',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
