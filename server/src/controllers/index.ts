import DB from '../models';

class Controller {
    private db = new DB();

    public getRecommendation = (): any => {
        return this.db.Recommendation.find({})
    }
}

export default Controller;