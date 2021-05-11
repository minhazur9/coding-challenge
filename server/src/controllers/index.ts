import express from 'express';
import DB from '../models';
import { UserRecommendation } from '../types/UserRecommendationInterface';

class Controller {
    private router = express.Router()
    private db = new DB();

    public getRecommendation = (): Promise<UserRecommendation> => {
        return this.db.Recommendation.find({})
    }

    public postRecommendation = (req: Record<string, any>): void => {
        this.router.post("/", (req, res) => {
            return this.db.Recommendation.create(req.body)
                .then((createdRec: UserRecommendation) => console.log(`created ${createdRec}`))
        })

    }
}

export default Controller;