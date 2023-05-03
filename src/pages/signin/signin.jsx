import { signInWithGooglePopup } from "../../utils/firebase/firebase.utlis"

const Signin = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response)
    }
    return (
        <div>
            <h1>sign in page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </div>
    )
}

export default Signin
