import { Query } from 'mongoose';
import DB from '../models';
import { UserRecommendation } from '../types/UserRecommendationInterface';

class Controller {
    private db = new DB();

    public getRecommendation = (): Query<UserRecommendation[], UserRecommendation, {}> => {
        return this.db.Recommendation.find({})
    }

    public postRecommendation = (userRecommendation: UserRecommendation): Promise<void> => {
        return this.db.Recommendation.create(userRecommendation)
            .then((createdRec: UserRecommendation) => console.log(`created ${createdRec}`))

    }
}

export default Controller;