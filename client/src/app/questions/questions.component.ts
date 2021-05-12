import { Component } from "@angular/core";
import { InputInterface } from "../types/InputInterface";
import { optionSetOne, optionSetTwo } from "./inputOptions";
import { recommendations } from "./recommendations";
import { Observable } from "rxjs";
import { UserRecommendation } from "../types/UserRecommendationInterface";
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent {

    private apiUrl: string = "http://localhost:3000/api"

    public optionSetOne: InputInterface[] = optionSetOne // first set of options

    public optionSetTwo: InputInterface[] = optionSetTwo // second set of options

    public questionOne: string = 'What kind of pizza are you in the mood for?' // first question

    public questionTwo: string = 'What kind of toppings would you want your pizza to have?' //second question

    public inputOne: InputInterface = { name: "", value: 0 } // value of first input

    public inputTwo: InputInterface = { name: "", value: 0 } // value of second input

    public questionNumber: number = 1 // the question number

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };

    constructor(private http: HttpClient) { }

    // Set input one value
    public setInputOne = (input: InputInterface): void => {
        this.inputOne = input
        this.questionNumber = 2
    }

    // Set input two value
    public setInputTwo = (input: InputInterface): void => {
        this.inputTwo = input
        this.questionNumber = -1
    }

    public resetQuestions = (): void => {
        this.questionNumber = 1
    }

    // Get the recommendation based on the user input and post to the server
    public getRecommendation = (): string => {
        const recommendationValue = this.inputOne.value + this.inputTwo.value
        const foundRecommendation = recommendations.find((recommendation) => recommendation.value === recommendationValue)
        if (foundRecommendation) {
            const userRecommendation = {
                inputOne: this.inputOne.name,
                inputTwo: this.inputTwo.name,
                recommendation: foundRecommendation.name
            }
            this.postUserRecommendation(userRecommendation).subscribe()
            return foundRecommendation.name
        }
        else return 'to try again'
    }

    // Post recommendation to server
    private postUserRecommendation = (userRecommendation: UserRecommendation): Observable<UserRecommendation> => {
        return this.http.post<UserRecommendation>(this.apiUrl, userRecommendation, this.httpOptions)
    }
}