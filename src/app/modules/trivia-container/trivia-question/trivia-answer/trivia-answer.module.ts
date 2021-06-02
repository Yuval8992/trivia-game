import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriviaAnswerComponent } from './trivia-answer.component';

@NgModule({
  declarations: [TriviaAnswerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TriviaAnswerComponent
  ]
})
export class TriviaAnswerModule { }
