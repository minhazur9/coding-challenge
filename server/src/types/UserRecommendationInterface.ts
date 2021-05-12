import { Document } from 'mongoose'
export interface UserRecommendation extends Document {
    inputOne: string,
    inputTwo: string,
    recommendation: string
} // type for user recommendation to be posted to the server