import { Component, Input } from "@angular/core";
import { InputInterface } from "../types/InputInterface";
import { optionSetOne, optionSetTwo } from "./listData/inputOptions";
import { Observable } from "rxjs";
import { UserRecommendation } from "../types/UserRecommendationInterface";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { UserInputsInterface } from "../types/UserInputsInterface";

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent {

    @Input() questionNumber: number = 0 // the question number brought over from app component

    private apiUrl: string = "http://localhost:3000/api" // the api url

    private inputOne: InputInterface = { name: "Normal", value: 0 } // value of first input

    private inputTwo: InputInterface = { name: "Nothing", value: 0 } // value of second input

    private questionOne: string = 'What kind of pizza are you in the mood for?' // first question

    private questionTwo: string = 'What kind of toppings would you want your pizza to have?' //second question

    private recommendation: string = "Plain" // the recommendation to be showed in the frontend

    public optionSetOne: InputInterface[] = optionSetOne // first set of options

    public optionSetTwo: InputInterface[] = optionSetTwo // second set of options


    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    }; // header options 

    constructor(private http: HttpClient) { }

    /*
    * Present the question to the user
    * @param {number} questionNumber - the number of the question
    * @return {string} the question that will be shown
    */
    public askQuestion = (questionNumber: number): string => {
        if (questionNumber === 1) return this.questionOne
        else if (questionNumber === 2) return this.questionTwo
        else return ""
    }

    /*
    * Present the recommendation to the user
    & @return {string} the recommendation that will be shown
    */
    public showRecommendation = (): string => {
        return this.recommendation
    }

    /* Set input one value
    *  @param {InputInterface} input - the input made by the user
    */
    public setInput = (input: InputInterface, questionNumber: number): void => {
        if (questionNumber === 1) this.inputOne = input
        else this.inputTwo = input
        this.questionNumber++
    }

    /*
    * Wrapper to set input and get recommendation at once for the click event
    * @param {InputInterface} input - the input that the user submitted
    */
    public finishQuestionairre = (input: InputInterface): void => {
        this.setInput(input, this.questionNumber)
        this.getRecommendation(this.inputOne, this.inputTwo)
    }

    // Restarts back to question one
    public resetQuestions = (): void => {
        this.questionNumber = 1
    }

    /*
    * Get the recommendation based on the user input
    * @param {inputOne} inputOne - the first user input
    * @param {inputTwo} inputTwo - the second user input
    * @return {string} the recommendation that will be given to the user
    */
    private getRecommendation = (inputOne: InputInterface, inputTwo: InputInterface): void => {
        const inputs: UserInputsInterface = {
            inputOne,
            inputTwo,
        }
        this.newUserRecommendation(inputs)
    }

    /*
    * Make a post request for a recommendation to the server
    * @param {UserRecommendation} recommendation - the recommendation given to the user
    * @return {Oservable} the observable made from the post request
    */
    private postUserRecommendation = (userInputs: UserInputsInterface): Observable<UserRecommendation> => {
        return this.http.post<UserRecommendation>(this.apiUrl, userInputs, this.httpOptions)
    }

    /*
    * Execute the post request to retrieve and create a new recommendation to the server
    * @param {UserRecommendation} recommendation - the recommenation given to the user
    */
    private newUserRecommendation = (userInputs: UserInputsInterface): void => {
        this.postUserRecommendation(userInputs).subscribe(newRecommendation => this.recommendation = newRecommendation.recommendation )
    }
}