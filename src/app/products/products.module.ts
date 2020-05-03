import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalModule } from '../global/global.module';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    GlobalModule
  ]
})
export class ProductsModule { }
