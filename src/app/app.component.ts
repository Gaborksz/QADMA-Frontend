import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CoreModule } from "./core/core.module";
import { MessageBoardService } from './core/services/message-board.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'QADMA-Frontend';

  menuOpen = false;

  constructor(
    private router: Router,
    private messageBoardService: MessageBoardService
  ) {
    this.messageBoardService.menuOpen$.subscribe(isOpen => {
      this.menuOpen = isOpen;
    })
  }

  ngOnInit() {
  }
}
