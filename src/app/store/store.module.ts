import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreRoutingModule } from './store-routing.module';
import { GlobalModule } from '../global/global.module';
import { StoreComponent } from './store.component';

@NgModule({
  declarations: [StoreComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    RouterModule,
    GlobalModule,
  ]
})
export class StoreModule { }
