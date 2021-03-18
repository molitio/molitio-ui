import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'molitio-resource-management',
  templateUrl: './resource-management.component.html',
  styleUrls: ['./resource-management.component.scss']
})
export class ResourceManagementComponent implements OnInit {
  screenWidth = 1000;

  constructor() { }

  ngOnInit(): void {
  }

}
