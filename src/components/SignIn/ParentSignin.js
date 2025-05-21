import { useEffect } from "react"
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { useHistory, useLocation } from "react-router-dom";
import styles from './styles.module.css';
export const ParentSignin = () => {

    const auth = getAuth();
    const location = useLocation();
    const history = useHistory()

    useEffect(() => {
        if (isSignInWithEmailLink(auth, window.location.href)) {
            let email = null;
            if (!email) {
                email = window.prompt('Please provide your email for confirmation');
            }
            signInWithEmailLink(auth, email, window.location.href)
                .then((res) => {
                  //  console.log('result', res, 'result user', res.additionalUserInfo.isNewUser);
                    history.push('/');
                }).catch((error) => {
                    console.log('error', error)
                });
           // history.push('/');
        }
    },[auth, location])

    return (
        <div>
            <div className={styles.title}>
            Creative Play Piano Studio
            </div>
            <div className={styles.signinT}>
                Parent Signin
            </div>
        </div>
    )

}