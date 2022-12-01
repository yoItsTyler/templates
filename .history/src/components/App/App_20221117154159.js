import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../Home';
import { Navbar } from '../Navbar/Navbar';
import { NavbarMobile } from '../NavbarMobile';
import { Plans } from '../Plans/Plans';
import { Specs } from '../Specs';
import { Web } from '../Web/Web';
import styles from './styles.module.css';






export const App = () => {

    


    return(
        <div className={styles.main}>
            
           
            <Switch>
                <Route exact path = '/web-plans' component={Plans}/>
                 <Route exact path = '/web' component={Web}/>
                 <Route exact path = '/specs' component={Specs}/>
                <Route path={['/']} component={Home}/>
                
            </Switch>
        </div>
    )
}