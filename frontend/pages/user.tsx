import nextCookies from 'next-cookies'
import decode from 'jwt-decode'
import React from 'react'
import { FIREBASE_COOKIE_NAME } from '../constants'
import { NextPage } from 'next'

const Page: NextPage<{ loggedIn; isAdmin }> = ({ loggedIn, isAdmin }) => {
    return <div>loggedIn = {JSON.stringify(loggedIn)}</div>
}

Page.getInitialProps = async (ctx) => {
    // nextCookies gets the cookies both in client and server
    const jwt = nextCookies(ctx)[FIREBASE_COOKIE_NAME]
    if (!jwt) {
        return { loggedIn: false, isAdmin: false }
    }
    // the cookie is basically a jwt containing some firebase information, like uid
    // you can also get the user claim from the cookie
    const { uid, isAdmin } = decode(jwt)
    return {
        loggedIn: !!jwt,
        isAdmin,
    }
}

export default Page
