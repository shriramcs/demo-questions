import { 
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Question } from '../app.component';

@Component({
  selector: 'rank-question',
  templateUrl: './question.component.html'
})
export class QuestionComponent implements OnInit{
  @Input() qn: Question;

  ngOnInit(){
    console.log(this.qn);
  }
}
