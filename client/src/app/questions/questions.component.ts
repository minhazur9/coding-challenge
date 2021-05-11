import { Component, Input } from "@angular/core";
import { InputInterface } from "../types/InputInterface";
import { inputOne, inputTwo } from "./inputOptions";
import { recommendations } from "./recommendations";
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent {

    private url = "http://localhost:3000/"

    public optionSetOne: InputInterface[] = inputOne // first set of options

    public optionSetTwo: InputInterface[] = inputTwo // second set of options

    public recommendations: InputInterface[] = recommendations // list of recommendations

    public questionOne: string = 'What kind of pizza are you in the mood for?' // first question

    public questionTwo: string = 'What kind of toppings would you want your pizza to have?' //second question

    public inputOneValue: number = 0 // value of first input

    public inputTwoValue: number = 0 // value of second input

    public questionNumber: number = 1 // the question number

    constructor(private http:HttpClient) {}

    // Set input one value
    public setInputOne = (value: number): void => {
        this.inputOneValue = value
        this.questionNumber = 2
    }

    // Set input two value
    public setInputTwo = (value: number): void => {
        this.inputTwoValue = value
        this.questionNumber = -1
    }

    public resetQuestions = (): void => {
        this.questionNumber = 1
    }

    // Get the recommendation based on the user input
    public getRecommendation = (): string => {
        const recommendationValue = this.inputOneValue + this.inputTwoValue
        const foundRecommendation = recommendations.find((recommendation) => recommendation.value === recommendationValue)
        if (foundRecommendation) return foundRecommendation.name
        else return 'Plain'
    }
}