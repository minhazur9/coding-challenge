const mongoose = require('mongoose')

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

const Recommendation = mongoose.model('Recommendation', RecommendationSchema)

module.exports = Recommendation