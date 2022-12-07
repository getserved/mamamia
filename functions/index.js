const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});
admin.initializeApp();

exports.addDoc = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const payload = req.body;

    // eslint-disable-next-line max-len
    const writeResult = await admin.firestore().collection("mamamia").add(payload);
  });
});
