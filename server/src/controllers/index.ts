import { Query } from 'mongoose';
import DB from '../models';
import { UserRecommendation } from '../types/UserRecommendationInterface';

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
    * @return {Promise<void>} a promise to the server for the recommendation to be added
    */
    public postRecommendation = (userRecommendation: UserRecommendation): Promise<void> => {
        return this.db.Recommendation.create(userRecommendation)
            .then((createdRec: UserRecommendation) => console.log(`created ${createdRec}`))

    }
}

export default Controller;