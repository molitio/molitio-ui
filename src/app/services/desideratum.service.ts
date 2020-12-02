import { R3ExpressionFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import * as RxjsRx from 'rxjs/Rx';
import { MolitioResource } from 'src/domain/resource/molitioResource';

@Injectable({
  providedIn: 'root',
})
export class DesideratumService {
  constructor() {}

  private subject: Subject<MessageEvent>;

  public connect(url: string): Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
    }
    return this.subject;
  }

  private create(url: string): Subject<MessageEvent> {
    const ws = new WebSocket(url);

    let observable = new Observable((observer: Observer<MessageEvent>) => {
      ws.onmessage = observer.next.bind(observer);
      ws.onerror = observer.error.bind(observer);
      ws.onclose = observer.complete.bind(observer);
    });

    let observer = {
      // check if need to be Object instead of MolitioResource
      next: (desideratum: MolitioResource) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(desideratum));
        }
      }
    };
    
    // need to investigate the depreciated .create() replacement
    return new Subject()

  }
}
