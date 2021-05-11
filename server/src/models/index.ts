import mongoose from 'mongoose'


class DB {
	private mongoose: any
	public Recommendation: any
	constructor() {
		this.mongoose = mongoose
		this.Recommendation = require('./Recommendation')
		
		this.mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		});

		this.mongoose.connection.on('connected', () => {
			console.log('Connected to MongoDB')
		})

		this.mongoose.connection.on('error', (err: any) => {
			console.log(`Mongoose connected error ${err}`)
		})
		

	}
}


export default DB






