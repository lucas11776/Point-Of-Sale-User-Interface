import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pos-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  year(): number {
    return new Date().getFullYear();
  }

}
