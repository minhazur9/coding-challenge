import { Component, Input } from "@angular/core";
import { InputInterface } from "../types/InputInterface";
import { inputOne, inputTwo } from "./inputOptions";
import { recommendations } from "./recommendations";

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent {

    optionSetOne: InputInterface[] = inputOne // first set of options

    optionSetTwo: InputInterface[] = inputTwo // second set of options

    recommendations: InputInterface[] = recommendations // list of recommendations

    questionOne: string = 'What kind of pizza are you in the mood for?' // first question

    questionTwo: string = 'What kind of toppings would you want your pizza to have?' //second question

    inputOneValue: number = 0 // value of first input

    inputTwoValue: number = 0 // value of second input

    questionNumber: number = 1 // the question number

    // Set answer one value
    public setInputOne = (value: number): void => {
        this.inputOneValue = value
        this.questionNumber = 2
    }

    // Set answer two value
    public setInputTwo = (value: number): void => {
        this.inputTwoValue= value
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