function assert(x, name = ''): string {
    if (!x) {
        throw Error(name + ' does not exist')
    }
    return x
}

function fromEnv(x): string {
    const y = process.env[x]
    return assert(y, x)
}

export const FIREBASE_CONFIG = {
    apiKey: 'AIzaSyD0ll629FiyH5SJ903ZeDdYpahfGPOqzxQ',
    authDomain: 'molten-enigma-261612.firebaseapp.com',
    databaseURL: 'https://molten-enigma-261612.firebaseio.com',
    projectId: 'molten-enigma-261612',
    storageBucket: 'molten-enigma-261612.appspot.com',
    messagingSenderId: '794182721870',
    appId: '1:794182721870:web:945e67c12addaa0cd43e1f',
    measurementId: 'G-YL40MBMZ0L',
}
export const NODE_ENV = process.env.NODE_ENV
export const GRAPHQL_URL = process.env.GRAPHQL_URL
export const FIREBASE_COOKIE_NAME = process.env.FIREBASE_COOKIE_NAME

assert(NODE_ENV, 'NODE_ENV')
assert(NODE_ENV, 'GRAPHQL_URL')
