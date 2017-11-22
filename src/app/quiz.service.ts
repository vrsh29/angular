import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  questions = [
    {question_1:"Which is the reserved word in java programming?",
      options: ["one","finally","throw handler","Java run time system"],
      answer:2},
  ];

  returnData(): any {
    return this.questions;
  }
  constructor() { }
 
}
