import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  startButtonClicked: boolean = false
  public renderQuestionComponent = (): void => {
    this.startButtonClicked = true
  }
}
