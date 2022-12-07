const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});
admin.initializeApp();

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    functions.logger.info("Hello logs!", {structuredData: true});
    res.send("Hello from Firebase!");
  });
});

exports.addDoc = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const payload = req.body;

    // eslint-disable-next-line max-len
    const writeResult = await admin.firestore().collection("mamamia").add(payload);

    res.json({result: `Message with ID: ${writeResult.id} added.`});
  });
});
