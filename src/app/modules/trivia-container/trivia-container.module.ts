import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriviaQuestionComponent } from './trivia-question/trivia-question.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    TriviaQuestionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    TriviaQuestionComponent
  ]
})
export class TriviaContainerModule { }
