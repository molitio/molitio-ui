import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'molitio-logo',
  templateUrl: './logo.component.svg',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {

  fillColor = 'green'

  constructor() {}

  ngOnInit(): void {}
}
