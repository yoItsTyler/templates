import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../Home';
import { Navbar } from '../Navbar/Navbar';
import { NavbarMobile } from '../NavbarMobile';
import { Web } from '../Web/Web';
import styles from './styles.module.css';






export const App = () => {

    


    return(
        <div className={styles.main}>
            
           
            <Switch>
                 <Route exact path = '/web' component={Web}/>
                <Route path={['/']} component={() => (<Home props={mobileBool}/>)}/>
                
            </Switch>
        </div>
    )
}