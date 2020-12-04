import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { catchError, tap } from 'rxjs/operators';
import { MolitioResource } from 'src/domain/resource/molitioResource';

@Injectable({
  providedIn: 'root',
})
export class DesideratumService {
  private subject: WebSocketSubject<MolitioResource>;

  constructor() {
    this.subject = this.connect('ws://localhost:5000/amqp');
  }

  public connect(url: string): WebSocketSubject<MolitioResource> {
    if (!this.subject) {
      this.subject = this.create(url);
    }
    return this.subject;
  }

  public signalHello(): void {
    this.subject.next({
      name: 'Bread',
      description: 'Whole grains loaf of bread',
      type: {
        name: 'basic.food',
      },
    });
  }

  private create(url: string): WebSocketSubject<MolitioResource> {
    const ws = webSocket<MolitioResource>(url);

    /*     ws.subscribe(
      (msg) => {
        console.log(`Received: ${msg}`);
      },
      (err) => {
        console.log(`Error: ${err.message}`);
      },
      () => {
        console.log('complete');
      }
    ); */

    // need to investigate the depreciated .create() replacement
    return ws;
  }
}
