import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'molitio-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  brand = 'molitio';
  brandMessage = '#human';
  logoSrc = 'assets/static/molitio-ico-64x64.png';

  constructor() {}

  ngOnInit(): void {}
}
