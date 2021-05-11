import mongoose from 'mongoose';
import { UserRecommendation } from '../types/UserRecommendationInterface';

const RecommendationSchema = new mongoose.Schema<UserRecommendation>({
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

module.exports = mongoose.model('Recommendation', RecommendationSchema)

