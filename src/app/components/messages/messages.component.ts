import { Component, OnInit } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';
import { DesideratumService } from 'src/app/services/desideratum.service';
import { MolitioResource } from 'src/domain/resource/molitioResource';

@Component({
  selector: 'molitio-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  messages: MolitioResource[] = [];
  MOLITIO_API_PORT = 3000;
  private socket: WebSocketSubject<MolitioResource>;

  constructor(private desideratumService: DesideratumService) {
    this.socket = desideratumService.connect('ws://localhost:5000/amqp');
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
    this.desideratumService.signalHello();
  }
}
