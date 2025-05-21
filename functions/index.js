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
exports.createUser = functions.https.onCall(async (data, context) => {
  // Check if the request is from an admin
  if (!context.auth || !context.auth.token.admin) {
    throw new functions.https.HttpsError(
        "permission-denied",
        "Only admins can create new users.",
    );
  }

  try {
    const userRecord = await admin.auth().createUser({
      uid: data.uid,
      email: data.email,
      password: data.password,
      displayName: data.displayName,
      emailVerified: false,
      disabled: data.disabled || false,
    });

    // Set custom claims for role
    await admin.auth().setCustomUserClaims(userRecord.uid, {
      role: data.role || "member",
    });

    console.log("Successfully created new user:", userRecord.uid);
    return {
      success: true,
      user: userRecord,
    };
  } catch (error) {
    console.error("Error creating new user:", error);
    throw new functions.https.HttpsError(
        "internal",
        "Error creating new user",
        error,
    );
  }
});
