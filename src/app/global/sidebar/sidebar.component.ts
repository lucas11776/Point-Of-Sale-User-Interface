import { Component, OnInit, HostListener } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'pos-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.toggleSidebar();
  }

  toggleSidebar() {
    $('body').toggleClass('sidebar-toggled');
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled"))
      $('.sidebar .collapse').addClass('hide');
  }
}
