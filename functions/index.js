const functions = require("firebase-functions");

// Code is running on the server so we don't have access
// to firebase that we installed

// To access the DB, we need to require the admin SDK
const admin = require('firebase-admin')
admin.initializeApp()

exports.createUserInDatabase = functions.auth.user().onCreate(async user => {
    const email = user.email

    try {
        const snapshot = await admin.database.ref('users/'+ user.uid).set({email: email, uid: user.uid})
        return snapshot
    } catch (err) {
        console.log(err)
        return err;
    }
})