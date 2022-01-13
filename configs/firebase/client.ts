// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
import { getAuth, GithubAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyASTHpCHwEds4e73Za5_rRrlSg3uDP-17k',
    authDomain: 'tweety-7d8f6.firebaseapp.com',
    projectId: 'tweety-7d8f6',
    storageBucket: 'tweety-7d8f6.appspot.com',
    messagingSenderId: '282142472504',
    appId: '1:282142472504:web:bc83b1deb1f2300de3a9cd',
    measurementId: 'G-5Y179NHDN5',
}

// Initialize Firebase
if (!getApps.length) {
    const app = initializeApp(firebaseConfig)
    // const analytics = getAnalytics(app)
}

const auth = getAuth()

const mapUserFromFirebaseAuth = (user: any) => ({
    displayName: user.displayName,
    username: user.reloadUserInfo.screenName,
    email: user.email,
    avatar: user.photoURL,
})

export const onAuthStateChange = setUser => {
    return onAuthStateChanged(auth, user => {
        setUser(user ? mapUserFromFirebaseAuth(user) : null)
    })
}

export const loginWithGitHub = async () => {
    const provider = new GithubAuthProvider()

    try {
        // signInWithPopup calls automatically the onAuthStateChange() as callback
        const result = await signInWithPopup(auth, provider)
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result)
        const token = credential.accessToken

        // The signed-in user info.
        const user = result.user
    } catch (err) {
        // Handle Errors here.
        const errorCode = err.code
        const errorMessage = err.message
        // The email of the user's account used.
        const email = err.email
        // The AuthCredential type that was used.
        // const credential = GithubAuthProvider.credentialFromError(err)
        // ...
    }
}
