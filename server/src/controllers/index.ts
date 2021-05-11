class Controller {
    private express = require('express');
    private db = require('../models')
    private router = this.express.Router()

    public getRecommendation = (): void => {
        const db = this.db
        this.router.get('/', (req: Request, res: Response) => {
            return db.Recommendation.find({}).json()
        })
    }
}

const controller = new Controller()

module.exports = controller