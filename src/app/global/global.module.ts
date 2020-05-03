import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthenticationModule } from '../authentication/authentication.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CoverPageComponent } from './cover-page/cover-page.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    CoverPageComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthenticationModule,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    CoverPageComponent,
    FooterComponent,
  ]
})
export class GlobalModule { }
