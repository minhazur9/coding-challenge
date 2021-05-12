import { Component } from "@angular/core";
import { InputInterface } from "../types/InputInterface";
import { optionSetOne, optionSetTwo } from "./inputOptions";
import { recommendations } from "./recommendations";
import { Observable } from "rxjs";
import { shareReplay, publishReplay } from 'rxjs/operators'
import { UserRecommendation } from "../types/UserRecommendationInterface";
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent {

    private apiUrl: string = "http://localhost:3000/api" // the api url

    public recommendation: string = "" // the recommendation to be showed in the frontend

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
    }; // header options 

    constructor(private http: HttpClient) { }

    // Set input one value
    public setInputOne = (input: InputInterface): void => {
        this.inputOne = input
        this.questionNumber = 2
    }

    // Set input two value
    private setInputTwo = (input: InputInterface): void => {
        this.inputTwo = input
        this.questionNumber = -1
    }

    // Wrapper to set input and get recommendation at once
    public finishQuestionairre  = (input: InputInterface): void => {
        this.setInputTwo(input)
        this.getRecommendation()
    }

    // Restarts back to question one
    public resetQuestions = (): void => {
        this.questionNumber = 1
    }

    // Get the recommendation based on the user input and post to the server
    private getRecommendation = (): string => {
        const recommendationValue = this.inputOne.value + this.inputTwo.value
        const foundRecommendation = recommendations.find((recommendation) => recommendation.value === recommendationValue)
        if (foundRecommendation) {
            const userRecommendation = {
                inputOne: this.inputOne.name,
                inputTwo: this.inputTwo.name,
                recommendation: foundRecommendation.name
            }
            this.recommendation = userRecommendation.recommendation
            this.newUserRecommendation(userRecommendation)
            return foundRecommendation.name
        }
        else return 'to try again'
    }

    // Make a post request for a recommendation to the server
    private postUserRecommendation = (userRecommendation: UserRecommendation): Observable<UserRecommendation> => {
        return this.http.post<UserRecommendation>(this.apiUrl, userRecommendation, this.httpOptions)
    }

    // Post the recommendation to the server
    private newUserRecommendation = (userRecommendation: UserRecommendation) => {
        this.postUserRecommendation(userRecommendation).subscribe()
    }
}