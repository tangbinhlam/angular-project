import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@osalam/shared';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CustomersRoutingModule} from './customers-routing.module';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerCardComponent} from './customer-card/customer-card.component';
import {CustomerNewComponent} from './customer-new/customer-new.component';
import {RepDialogComponent} from './rep-dialog/rep-dialog.component';


@NgModule({
  declarations: [CustomerListComponent, CustomerCardComponent, CustomerNewComponent, RepDialogComponent],
  entryComponents: [RepDialogComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class CustomersModule {
}
