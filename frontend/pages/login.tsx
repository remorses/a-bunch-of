import { default as React } from 'react'
import { GoogleButton } from 'firebase-react-components'
import firebase from 'firebase/app'
import 'firebase/auth'
import { FIREBASE_CONFIG, FIREBASE_COOKIE_NAME } from '../constants'
import Router from 'next/router'

async function onLogin(user: firebase.User) {
    const idToken = await user.getIdToken()
    const response = await fetch('/api/login', {
        method: 'POST',
        credentials: 'include',
        body: idToken,
    })
    if (!response.ok) {
        alert(response.statusText)
        return
    }
    console.log(JSON.stringify(user, null, 4))
    await Router.push('/')
}

const Page = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(FIREBASE_CONFIG)
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
    }

    return (
        <GoogleButton
            text='Start With Google'
            useCookie={FIREBASE_COOKIE_NAME} // to get the signed in state
            onLogin={onLogin}
        />
    )
}

export default Page
