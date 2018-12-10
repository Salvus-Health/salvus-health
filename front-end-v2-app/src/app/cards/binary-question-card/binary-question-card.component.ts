import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'abe-binary-question-card',
  templateUrl: './binary-question-card.component.html',
  styleUrls: ['./binary-question-card.component.scss']
})
export class BinaryQuestionCardComponent implements OnInit {
  @Input() question;
  @Input() affirmativeRef;
  @Input() negativeRef;
  @Output() isPositive = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  affirmativeClick() {
    this.isPositive.emit(true);
  }

  negativeClick() {
    this.isPositive.emit(false);
  }

}
