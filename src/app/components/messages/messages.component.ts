import { Component, OnInit } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';
import { ResourceService } from 'src/app/services/resource.service';
import { IMolitioResource } from '@molitio/molitio-lib'

@Component({
  selector: 'molitio-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  messages: IMolitioResource[] = [];
  MOLITIO_API_PORT = 3000;
  private socket: WebSocketSubject<IMolitioResource>;

  constructor(private resourceService: ResourceService) {
    this.socket = resourceService.connect('ws://localhost:4224/signal');
  }

  ngOnInit(): void {
    this.socket.subscribe(
      (msg) => {
        console.log(msg.name);
        this.messages.push(msg);
      },

      (err) => {
        console.log(err);
      },
      () => console.log('complete')
    );
  }

  signalHello(): void {
    this.resourceService.signalHello();
  }
}
