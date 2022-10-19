import app from "./firebase.config";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';



const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const handleSignInGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user
            console.log(user)
        })
        .catch((error) => {
            console.error(error)
        })
}


export default handleSignInGoogle;