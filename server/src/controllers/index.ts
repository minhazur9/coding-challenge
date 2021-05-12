import { Query } from 'mongoose';
import DB from '../models';
import { UserRecommendation } from '../types/UserRecommendationInterface';
import { recommendations } from '../listData/recommendations';
import { UserInputsInterface } from '../types/UserInputsInterface';

class Controller {
    private db = new DB(); // the database

    /*
    * Gets the list of user recommendations and inputs that were submitted and given to the user
    * @return {Query<UserRecommendation[], UserRecommendation, {}>} the list of recommendation documents found
    */
    public getRecommendation = (): Query<UserRecommendation[], UserRecommendation, {}> => {
        return this.db.Recommendation.find({})
    }

    /*
    * Creates and adds a recommendation document to the server
    * @param {UserRecommendation} userRecommendation - the recommendation document to be added
    * @return {Promise<void | string | UserRecommendation>} a promise to the server for the recommendation to be added or log an error
    */
    public postRecommendation = (userInputs: UserInputsInterface): Promise<string | void | UserRecommendation> => {
        const recommendationValue = userInputs.inputOne.value + userInputs.inputTwo.value
        const foundRecommendation = recommendations.find((recommendation) => recommendation.value === recommendationValue)
        if (foundRecommendation) {
            const userRecommendation = {
                inputOne: userInputs.inputOne.name,
                inputTwo: userInputs.inputTwo.name,
                recommendation: foundRecommendation.name
            }
            return this.db.Recommendation.create(userRecommendation)
                .then((createdRec: UserRecommendation) => createdRec)
        }
        return this.db.Recommendation.create({}).then(() => console.log("error"))
    }
}

export default Controller;