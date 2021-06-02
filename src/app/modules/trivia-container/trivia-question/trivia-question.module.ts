import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriviaQuestionComponent } from './trivia-question.component';
import { TriviaAnswerModule } from './trivia-answer/trivia-answer.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TriviaQuestionComponent
  ],
  imports: [
    CommonModule,
    TriviaAnswerModule,
    SharedModule
  ],
  exports: [
    TriviaQuestionComponent
  ]
})
export class TriviaQuestionModule { }
