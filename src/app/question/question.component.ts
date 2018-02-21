import { Component } from '@angular/core';

@Component({
  selector: 'rank-question',
  templateUrl: './question.component.html'
})
export class QuestionComponent {
  title = 'app';
  welcome:boolean = false;
  onEnter(){
    this.welcome = true;
  }
}
