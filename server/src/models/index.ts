import  mongoose from 'mongoose'
import { UserRecommendation } from '../types/UserRecommendationInterface';
import UserRecommendationModel from './Recommendation';

class DB {
	public Recommendation: mongoose.Model<UserRecommendation> = UserRecommendationModel
	private uri: any = process.env.MONGODB_URI
		constructor() {
			mongoose.connect(this.uri, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
				useFindAndModify: false,
			});

			mongoose.connection.on('connected', () => {
				console.log('Connected to MongoDB')
			})

			mongoose.connection.on('error', (err: any) => {
				console.log(`Mongoose connected error ${err}`)
			})
		}
}

export default DB






