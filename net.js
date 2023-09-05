/*
// const http = require('http');
// const https = require('https');

// https.get('https://www.google.com/', res => {
//   console.log(res.statusCode);
// }).on('error', err => {
//   console.error(err);
// })

// https.request({
//   hostname: 'https://www.google.com/',
//   port: 443,
//   path: '/search?q=xcv',
//   method: 'POST'
// }, res => {
//   console.log(res.statusCode);
// }).on('error', err => {
//   console.error(err);
// })
*/

// const request = require('co-request'); // The same but use Promises
// // const request = require('request');

// request('https://jsonplaceholder.typicode.com/posts', (err, response, body) => {
//   if ( err ) console.error(err);
  
//   console.log(JSON.parse(body)[0]);
// })

/*
// const nodemailer = require('nodemailer')

// const smtpTransport = nodemailer.createTransport("SMTP", {
//  service: "Gmail",
//  auth: {
//   user: "tatarenkoe@gmail.com",
//   pass: "*********"
//   }
// });

// const mailOptions = {
//   from: "Evgenii Tatarenko <tatarenkoe@gmail.com>",
//   to: "Evgenii Tatarenko <tatarenkoe@gmail.com>",
//   subject: "Hello ✔",
//   text: "Hello world ✔",
//   // html: "<b>Hello world ✔</b>"
// }

// smtpTransport.sendMail(mailOptions, (error, response) => {
//   if ( error ) console.error(error);
//   else console.log("Message sent: " + response.message);
//   smtpTransport.close();
// });
*/