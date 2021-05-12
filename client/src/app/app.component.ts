import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public questionNumber: number = 0 // the question number

  /*
  * Starts the questionairre
  */
  public startQuestionairre = (): void => {
    this.questionNumber++
  }
}
