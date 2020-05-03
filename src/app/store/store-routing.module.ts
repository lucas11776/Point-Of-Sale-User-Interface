import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './store.component';
import { CoverPageComponent } from '../global/cover-page/cover-page.component';
import { NavbarComponent } from '../global/navbar/navbar.component';
import { SidebarComponent } from '../global/sidebar/sidebar.component';
import { FooterComponent } from '../global/footer/footer.component';

const routes: Routes = [
  { path: '', component: CoverPageComponent, children: [
    { path: '', component: NavbarComponent, outlet: 'navbar' },
    { path: '', component: SidebarComponent, outlet: 'sidebar' },
    { path: '', component: FooterComponent, outlet: 'footer' },
    { path: '', component: StoreComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
