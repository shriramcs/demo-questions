import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  welcome:boolean = false;
  questions: Question[];
  
  onEnter(){
    this.welcome = true;
  }

  ngOnInit(){
    this.questions = <Question[]>[
      { id: 1, num: "1", label: "First Name", type: "text"},
      { id: 2, num: "2", label: "Last Name", type: "text"},
      { id: 3, num: "3", label: "Company", type: "text"},
      { id: 4, num: "4", label: "Email Address", type: "text"}
    ];
  }

  onFocus(event, qn){
    console.log('on focus');
  }
}

export class Question{
  label: string;
  id: number;
  num: string;
  answer: any;
  type: string;
}