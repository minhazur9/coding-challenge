import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public questionNumber: number = 0 // the question number

  constructor(private titleService: Title) { }

  /*
  * Set the title of the page
  * @param {string} newTitle - the title for the page
  */
  private setTitle = (newTitle: string) => {
    this.titleService.setTitle(newTitle);
  }

  // Set the title on load
  ngOnInit() {
    this.setTitle('PizzaRec')
  }

  /*
  * Starts the questionairre
  */
  public startQuestionairre = (): void => {
    this.questionNumber++
  }
}
