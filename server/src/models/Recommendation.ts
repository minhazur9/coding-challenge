import mongoose from 'mongoose';

const RecommendationSchema = new mongoose.Schema({
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

