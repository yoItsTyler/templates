import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useAuth, useIsAdmin } from '../../hooks';
import { AdminDash, ParentDash } from '../AdminDash';
import { AdminStudents } from '../AdminStudents/AdminStudents';
import { Home } from '../Home';
import { ParentSignin } from '../SignIn';
import SignIn from '../SignIn/SignIn';
import SignUp from '../Signup/Signup';
import styles from './styles.module.css';
import { Consultation } from '../Consultation/Consultation';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from '../Footer/Footer';
import { Resources } from '../Resources/Resources';

export const App = () => {
    const { isAuthed, authUser } = useAuth();
    const isAdmin = useIsAdmin();
    useEffect(() => {
        const lockVH = () => {
            // Lock viewport height on initial render
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        lockVH(); // Run on component mount

        // No need to add event listeners for resize or orientation changes
    }, []);

    useEffect(() => {
        
        console.log('Is Admin from /app =>', isAdmin)
    },[isAdmin])

    const theme = createTheme({
        typography: {
          fontFamily: '"Crimson Text", serif',
        },
      });


    return (
        <ThemeProvider theme={theme}>
        <div className={styles.main}>
            {authUser && isAdmin === undefined ? (
                <></>
            ) : isAuthed && isAdmin ? (
                <Switch>
                    <Route path={'/signup'} component={SignUp} />
                    <Route path={'/login'} component={SignIn} />
                    <Route path={'/students'} component={AdminStudents}/>
                    <Route path={'/parent-signin'} component={ParentSignin}/>
                    <Route path={'/parent-dash'} component={ParentDash}/>
                    <Route path={'/consultation'} component={Consultation}/>
                    <Route path={'/resources'} component={Resources}/>
                    <Route path={['/']} component={AdminDash} />
                </Switch>
            ) : isAuthed ? (
                <Switch>
                    <Route path={'/'} component={ParentDash}/>
                </Switch>
            ) : (
                <Switch>
                    <Route path={'/parent-signin'} component={ParentSignin}/>
                    <Route path={'/signup'} component={SignUp} />
                    <Route path={'/login'} component={SignIn} />
                    <Route path={'/consultation'} component={Consultation}/>
                    <Route path={'/resources'} component={Resources}/>
                    <Route path={['/']} component={Home} />
                    
                </Switch>
            )}

            
        </div>
        </ThemeProvider>
    )
}