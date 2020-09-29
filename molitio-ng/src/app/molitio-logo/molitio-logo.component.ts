import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'molitio-molitio-logo',
  templateUrl: './molitio-logo.component.html',
  styleUrls: ['./molitio-logo.component.scss']
})
export class MolitioLogoComponent implements OnInit {

  brand='<molitio>';
  brandMessage='web development';

  constructor() { }

  ngOnInit(): void {
  }

}
