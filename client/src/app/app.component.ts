import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  started: boolean = false
  public renderQuestionComponent = (): void => {
    this.started = true
  }
}
