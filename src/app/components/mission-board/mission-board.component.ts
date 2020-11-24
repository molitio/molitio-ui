import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'molitio-mission-board',
  templateUrl: './mission-board.component.html',
  styleUrls: ['./mission-board.component.scss'],
})
export class MissionBoardComponent implements OnInit {
  mapsViewHeight: number;
  zoom = 1;
  options: google.maps.MapOptions = {
    
  }

  constructor() {
    this.mapsViewHeight = 500;
    this.getScreenHeight();
  }

  @HostListener('window:resize', ['$event'])
  getScreenHeight(event?) {
    this.mapsViewHeight = window.innerHeight - 100;
  }
  ngOnInit(): void {}
}
