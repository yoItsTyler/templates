import { Route, Switch } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { AdminDash } from '../AdminDash';
import { AdminStudents } from '../AdminStudents/AdminStudents';

import { Home } from '../Home';

import SignIn from '../SignIn/SignIn';
import SignUp from '../Signup/Signup';
import styles from './styles.module.css';





export const App = () => {
    const { isAuthed, authUser } = useAuth();


    return (
        <div className={styles.main}>
            {authUser === undefined ? (
                <></>
            ) : isAuthed ? (
                <Switch>
                    <Route path={'/signup'} component={SignUp} />
                    <Route path={'/login'} component={SignIn} />
                    <Route path={'/students'} component={AdminStudents}/>
                    <Route path={['/']} component={AdminDash} />
                </Switch>
            ) : (
                <Switch>
                    <Route path={'/signup'} component={SignUp} />
                    <Route path={'/login'} component={SignIn} />
                    <Route path={['/']} component={Home} />
                </Switch>
            )}


        </div>
    )
}