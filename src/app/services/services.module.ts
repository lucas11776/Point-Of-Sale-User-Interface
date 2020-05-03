import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalModule } from '../global/global.module';
import { ServicesRoutingModule } from './services-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    GlobalModule,
  ]
})
export class ServicesModule { }
