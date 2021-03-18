import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { catchError, tap } from 'rxjs/operators';
import { IMolitioResource } from '@molitio/molitio-lib';
//import { apiConfig, wssConfig } from '@molitio/molitio-lib/lib';

@Injectable({
  providedIn: 'root',
})

export class ResourceService {
  _bread: IMolitioResource = {
    name: 'Bread',
    description: 'Whole grains loaf of bread',
    rating: { positive: 6, negative: 1 },
    tags: [
      {
        descriptors: [
          { description: 'ResourceType', value: 'Food' },
          { description: 'ResourceSubType', value: 'bread' },
        ],
        rating: { positive: 3, negative: 1 },
      },
      {
        descriptors: [{ description: 'ServingSize', value: 2 }],
        rating: { positive: 5, negative: 2 },
      },
    ],
  };

  private subject: WebSocketSubject<IMolitioResource>;

  constructor() {
    this.subject = this.connect('ws://localhost:4224/signal');
    //  this.subject = this.connect(wssConfig.wsDesideratumUrl);
  }

  public connect(url: string): WebSocketSubject<IMolitioResource> {
    if (!this.subject) {
      this.subject = this.create(url);
    }
    return this.subject;
  }

  public signalHello(): void {
    this.subject.next(this._bread);
  }

  private create(url: string): WebSocketSubject<IMolitioResource> {
    const ws = webSocket<IMolitioResource>(url);

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
