import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { About } from '../About';
import { Branding } from '../Branding/Branding';
import { BrandingPlans } from '../BrandingPlans/BrandingPlans';
import { Contact } from '../Contact';
import { Home } from '../Home';
import { LogoDesign } from '../LogoDesign';
import { Marketing } from '../Marketing/Marketing';
import { Navbar } from '../Navbar/Navbar';
import { NavbarMobile } from '../NavbarMobile';
import { Plan } from '../Plan/Plan';
import { Plans } from '../Plans/Plans';
import { Request } from '../Request';
import { Specs } from '../Specs';
import { Web } from '../Web/Web';
import styles from './styles.module.css';






export const App = () => {

    


    return(
        <div className={styles.main}>
            
           
            <Switch>
            <Route exact path='/branding-plans' component={BrandingPlans}/>
            <Route exact path = {['/request/:id', '/request']} component={Request}/>
            <Route exact path='/marketing' component={Marketing}/>
            <Route exact path = '/branding' component={Branding}/>
            <Route exact path = '/logo-design' component={LogoDesign}/>
                <Route exact path = '/plan/:id' component={Plan}/>
                <Route exact path = '/web-plans' component={Plans}/>
                 <Route exact path = '/web' component={Web}/>
                 <Route exact path = '/specs' component={Specs}/>
                 <Route exact path = '/about' component={About}/>
                 <Route exact path = '/contact' component={Contact}/>
                <Route path={['/']} component={Home}/>
                
            </Switch>
        </div>
    )
}