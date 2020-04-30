require('dotenv').config();
const functions = require('firebase-functions');
const axios = require('axios');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.convertKitSubscriber = functions.https.onCall((data, context) => {
	const email = data.email;
	const options = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const newData = {
		api_key: process.env.CONVERTKIT_API_KEY,
		email: email
	};
	async function makePost(input) {
		await axios
			.post('https://api.convertkit.com/v3/forms/1355322/subscribe', input, options)
			.then((response) => console.log(response))
			.catch((error) => console.log(error));
	}
	makePost(newData);
});
