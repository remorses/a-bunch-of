import admin from 'firebase-admin'
import { firebaseLoginWithCookie } from 'next-firebase-login'
import { FIREBASE_COOKIE_NAME } from '../../constants'

if (!admin.apps.length) {
    const serviceAccount = require('../../serviceAccount.json')
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: 'https://molten-enigma-261612.firebaseio.com',
    })
}

// serve the cookie
export default firebaseLoginWithCookie({
    cookieName: FIREBASE_COOKIE_NAME,
    cookieExpiresInDays: 5,
})
