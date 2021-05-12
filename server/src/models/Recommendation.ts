import { Schema, model } from 'mongoose';
import { UserRecommendation } from '../types/UserRecommendationInterface';

const RecommendationSchema: Schema = new Schema({
    inputOne: {
        type: String,
        required: true,
    },
    inputTwo: {
        type: String,
        required: true,
    },
    recommendation: {
        type: String,
        required: true
    }
})

const UserRecommendationModel = model<UserRecommendation>('Recommendation', RecommendationSchema)

export default UserRecommendationModel

