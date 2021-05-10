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

    inputOne: InputInterface[] = inputOne // first set of options

    inputTwo: InputInterface[] = inputTwo // second set of options

    recommendations: InputInterface[] = recommendations // list of recommendations

    questionOne: string = 'What kind of pizza are you in the mood for?'

    answerOne: InputInterface = {
        name: 'Normal',
        value: 0
    } // default answerOne

    answerTwo: InputInterface = {
        name: 'Nothing',
        value: 0
    }; // default answerTwo

    // Get the recommendation based on the user input
    public getRecommendation = (): string => {
        const recommendationValue = this.answerOne.value + this.answerTwo.value
        const foundRecommendation = recommendations.find((recommendation) => recommendation.value === recommendationValue)
        if (foundRecommendation) return foundRecommendation.name
        else return 'Plain'
    }
}