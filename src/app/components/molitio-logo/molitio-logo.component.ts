import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'molitio-molitio-logo',
  templateUrl: './molitio-logo.component.html',
  styleUrls: ['./molitio-logo.component.scss'],
})
export class MolitioLogoComponent implements OnInit {
  brand = 'molitio';
  brandMessage = '#human';
  logoSrc = 'assets/static/molitio-logo_v2.png';

  constructor() {}

  ngOnInit(): void {}
}
