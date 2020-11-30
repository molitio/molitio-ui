import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { MolitioResource } from 'src/domain/resource/molitioResource';

@Component({
  selector: 'molitio-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  messages: MolitioResource[] = [];
MOLITIO_API_PORT=3000
socket: WebSocketSubject<MolitioResource> = webSocket('ws://localhost:5000/amqp');

  constructor() {
    this.socket.subscribe(
      (msg) => this.messages.push(msg),
      (err) => console.log(err.message)
    );
  }

  ngOnInit(): void {}
}
