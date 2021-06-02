import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Answer } from 'src/app/shared/models/answer.model';

@Component({
  selector: 'app-trivia-answer',
  templateUrl: './trivia-answer.component.html',
  styleUrls: ['./trivia-answer.component.scss']
})
export class TriviaAnswerComponent implements OnInit {
  @Input('answer') answer: Answer;
  borderColor: string;
  @HostListener('click') onclick() {
    this.checkIfCorrect();
  }

  constructor() { }

  ngOnInit(): void {
  }

  checkIfCorrect() {
    if (this.answer.isCorrect) {
      this.borderColor = '1.5px solid #1565C0';
    } else {
      this.borderColor = '1.5px solid red'
    }
  }
}
