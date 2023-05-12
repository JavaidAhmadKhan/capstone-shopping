import SignInForm from "../../components/SignInForm/SignInForm"
import SignUpForm from "../../components/SignUpForm/SignUpForm"

import './authentication.scss'

const Authentication = () => {
    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication
