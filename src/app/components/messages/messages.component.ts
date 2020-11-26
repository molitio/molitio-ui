import { Component, OnInit } from '@angular/core';
import * as Amqp from 'amqp-ts';

@Component({
  selector: 'molitio-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  //probably going websockets and api
  connection = new Amqp.Connection('amqp://localhost');
  queue = this.connection.declareQueue('desideratium', { durable: false });
  messages: string[] = [];

  getMessages = () => {
    this.queue.activateConsumer((message) => {
      this.messages.push(message.getContent().toString());
    }, {noAck: true});
  };

  constructor() {
    this.getMessages();
  }

  ngOnInit(): void {}
}
