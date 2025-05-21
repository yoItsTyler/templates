/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started
// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
exports.createUser = functions.https.onCall(function(data, context) {
  try {
    admin.auth().createUser({
      uid: data.uid,
      email: data.email,
      password: data.password,
      displayName: data.fullName,
      emailVerified: false,
      disabled: false,
      role: data.role,
    }).then(function(userRecord) {
      console.log("Successfully created new user:", userRecord.uid);
      response.set('Access-Control-Allow-Methods', 'GET, POST');
      return {
        response: userRecord,
      };
    }).catch(function(error) {
      console.error("Error creating new user:", error);
      throw new functions.https.HttpsError("unknown", error.message, error);
    });
  } catch (error) {
    console.error("Error creating new user:", error);
    throw new functions.https.HttpsError("unknown", error.message, error);
  }
});
