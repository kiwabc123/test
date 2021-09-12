const functions = require("firebase-functions");

const admin = require('firebase-admin');
const express = require('express')
const bodyParser = require('body-parser')

admin.initializeApp(functions.config().firebase)

const DATABASE =admin.firestore()
const collection_name = "student"

const app =express()
const main =express()

main.use('/api/v1',app)
main.use(bodyParser.json())
main.use(bodyParser.urlencoded({extended:true}))

main.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

exports.getAllStudent = functions.https.onRequest(async(req, res) => {
    try {
        const student_query_snapshot = await DATABASE.collection(collection_name).get();
        const array_of_result = []
        

        student_query_snapshot.forEach((doc) => {
            array_of_result.push({
                id: doc.id,
                data: doc.data()
            })
        })

        res.status(200).json(array_of_result);
    } catch (err) {
        res.status(500).send(error)
    }
})
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
