import { Component } from '@angular/core';
import { MessageBoardService } from '../../services/message-board.service';
import { MessageBoardEntry } from '../../model/message-board-entry';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrl: './message-board.component.css'
})
export class MessageBoardComponent {

  messages: MessageBoardEntry[] = [];

  constructor(private messageBoardService: MessageBoardService) {

    this.messageBoardService.messages$.subscribe(messages => {
      this.messages = messages;
    })
  }

  ngOnInit() {

  }
}
