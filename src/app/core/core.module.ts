import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MessageBoardComponent } from './components/message-board/message-board.component';



@NgModule({
  declarations: [
    MessageBoardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [MessageBoardComponent]

})
export class CoreModule { }
