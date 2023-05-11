import SignupForm from "../../components/SignupForm/SignupForm";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utlis"

const Signin = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <>
            <h1>sign in page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <div>
                <SignupForm />
            </div>
        </>
    )
}

export default Signin
