import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mathproblem',
  templateUrl: './mathproblem.component.html',
  styleUrls: ['./mathproblem.component.css']
})
export class MathproblemComponent implements OnInit {
  number1 = 0;
  number2 = 0;
  answer: any;
  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.answer = this.number1 + this.number2;
    this.answer = `Sum of ${this.number1} and ${this.number2} is ${this.answer}.` 
  }
  sub(){
    this.answer = this.number1 - this.number2;
    this.answer=`Sub of ${this.number1} and ${this.number2} is ${this.answer}.`
  }
  mul(){
    this.answer = this.number1 * this.number2;
    this.answer=`Mul of ${this.number1} and ${this.number2} is ${this.answer}.`
  }
  div(){
    this.answer = this.number1 / this.number2;
    this.answer=`Div of ${this.number1} and ${this.number2} is ${this.answer}.`

  } 
}
