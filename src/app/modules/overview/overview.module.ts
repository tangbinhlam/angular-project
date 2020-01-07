import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewComponent} from './overview/overview.component';
import {SharedModule} from '../../shared/shared.module';
import {OverviewRoutingModule} from './overview-routing.module';

@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    OverviewRoutingModule,
  ]
})
export class OverviewModule {
}
