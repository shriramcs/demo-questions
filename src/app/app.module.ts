import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { SetfocusDirective } from './setfocus.directive';
import { SetfocusinputDirective} from './setfocusinput.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    SetfocusDirective,
    SetfocusinputDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
