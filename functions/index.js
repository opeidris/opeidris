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

exports.sendContactForm = functions.https.onCall((data, context) => {
	const options = {
		headers: {
			'Content-Type': 'application/json',
			'api-key': process.env.SENDINBLUE_API_KEY
		}
	};

	const newData = {
		sender: { name: 'Opeyemi Idris', email: 'themanhimself@opeidris.com' },
		to: [ { email: 'opeyemi@opeidris.com' } ],
		replyTo: { email: 'opeyemi@opeidris.com', name: data.full_name },
		textContent: data.message + ' ' + data.p_number + ' ' + data.email,
		subject: `Email from ${data.full_name}`
	};
	async function makePost(input) {
		await axios
			.post('https://api.sendinblue.com/v3/smtp/email', input, options)
			.then((response) => console.log(response))
			.catch((error) => console.log(error));
	}
	makePost(newData);
});
