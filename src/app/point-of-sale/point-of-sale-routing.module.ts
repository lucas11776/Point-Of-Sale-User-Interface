import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PointOfSaleComponent } from './point-of-sale.component';

const routes: Routes = [{ path: '', component: PointOfSaleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PointOfSaleRoutingModule { }
