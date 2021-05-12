import express from 'express';
import DB from '../models';
import { UserRecommendation } from '../types/UserRecommendationInterface';

class Controller {
    public router = express.Router()
    private db = new DB();

    public getRecommendation = (): Promise<UserRecommendation> => {
        return this.db.Recommendation.find({})
    }

    public postRecommendation = (userRecommendation: UserRecommendation): Promise<UserRecommendation> => {
        return this.db.Recommendation.create(userRecommendation)
            .then((createdRec: UserRecommendation) => console.log(`created ${createdRec}`))

    }
}

export default Controller;