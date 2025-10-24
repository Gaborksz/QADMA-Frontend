import { Injectable } from '@angular/core';
import { MessageBoardEntry } from '../model/message-board-entry';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageBoardService {

  private messages: MessageBoardEntry[] = []
  private messagesSubject = new BehaviorSubject<MessageBoardEntry[]>(this.messages)

  messages$ = this.messagesSubject.asObservable()
  menuOpen$ = new BehaviorSubject<boolean>(false)


  displayMessage(entry: MessageBoardEntry) {
    this.messages.unshift(entry);
    this.messagesSubject.next(this.messages);

    this.menuOpen$.next(true)
    setTimeout(() => {
      this.menuOpen$.next(false);
    }, 2000);
  }
}
