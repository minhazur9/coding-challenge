class Models {
	private mongoose = require('mongoose')
	constructor() {
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

const models = new Models();

module.exports = {
	Recommendation: require('./Recommendation')
}






