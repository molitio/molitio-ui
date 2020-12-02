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
  MOLITIO_API_PORT = 3000;
  socket: WebSocketSubject<string> = webSocket(
    'ws://localhost:5000/amqp'
  );

  constructor() {
    this.socket.subscribe(
      (msg) => {
        var result = JSON.parse(msg);
        console.log(result);
        this.messages.push(result as MolitioResource);
      },
      (err) => {
        console.log(err.message);
      },
      () => {
        console.log('completed');
      }
    );
  }

  ngOnInit(): void {}
}
