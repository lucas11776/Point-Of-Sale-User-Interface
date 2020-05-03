import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalModule } from '../global/global.module';
import { PointOfSaleRoutingModule } from './point-of-sale-routing.module';
import { PointOfSaleComponent } from './point-of-sale.component';


@NgModule({
  declarations: [PointOfSaleComponent],
  imports: [
    CommonModule,
    GlobalModule,
    PointOfSaleRoutingModule,
  ]
})
export class PointOfSaleModule { }
