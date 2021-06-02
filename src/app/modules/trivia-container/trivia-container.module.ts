import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriviaContainerComponent } from './trivia-container.component';
import { SharedModule } from '../../shared/shared.module';
import { TriviaQuestionModule } from './trivia-question/trivia-question.module';

@NgModule({
  declarations: [
    TriviaContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TriviaQuestionModule
  ],
  exports: [
    TriviaContainerComponent
  ]
})
export class TriviaContainerModule { }
