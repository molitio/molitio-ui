import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'molitio-brand-info',
  templateUrl: './brand-info.component.html',
  styleUrls: ['./brand-info.component.scss']
})
export class BrandInfoComponent implements OnInit {
  brand = 'molitio.org';
  brandMessage = '#human';

  constructor() { }

  ngOnInit(): void {
  }

}
