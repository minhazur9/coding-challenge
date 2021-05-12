import  mongoose from 'mongoose'
import { UserRecommendation } from '../types/UserRecommendationInterface';
import UserRecommendationModel from './Recommendation';

class DB {
	public Recommendation: mongoose.Model<UserRecommendation> = UserRecommendationModel // the recommendation model
	private uri: any = process.env.MONGODB_URI // the mongodb uri
		constructor() {

			// connect to the mongodb server
			mongoose.connect(this.uri, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
				useFindAndModify: false,
			}); 

			// print success log if connected successfully
			mongoose.connection.on('connected', () => {
				console.log('Connected to MongoDB')
			})

			// print error log if there was a problem connecting
			mongoose.connection.on('error', (err: any) => {
				console.log(`Mongoose connected error ${err}`)
			})
		}
}

export default DB






