import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MessageBoardComponent } from './components/message-board/message-board.component';
import { ClassNamePipe } from "./pipes/class-name.pipe";



@NgModule({
  declarations: [
    MessageBoardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClassNamePipe
],
  exports: [MessageBoardComponent]

})
export class CoreModule { }
