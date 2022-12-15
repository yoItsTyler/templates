import { Fragment } from 'react';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { About } from '../About';
import { Branding } from '../Branding/Branding';
import { BrandingPlan } from '../BrandingPlan/BrandingPlan';
import { BrandingPlans } from '../BrandingPlans/BrandingPlans';
import { Contact } from '../Contact';
import { Home } from '../Home';
import { LogoDesign } from '../LogoDesign';
import { Marketing } from '../Marketing/Marketing';
import { Plan } from '../Plan/Plan';
import { Plans } from '../Plans/Plans';
import { Request } from '../Request';
import { Specs } from '../Specs';
import { Web } from '../Web/Web';
import styles from './styles.module.css';






export const App = () => {
    function ScrollToTop({history, children}) {
        useEffect(() => {
            const unlisten = history.listen(() => {
                window.scrollTo(0,0);
                
            });
            return () => {
                unlisten();
            }           

        }, []);
        return<Fragment>{children}</Fragment>;

    }
    export default withRouter(ScrollToTop);




    return (
        <div className={styles.main}>


            <Switch>
                <Route exact path='/branding-plans' component={BrandingPlans}/>
                <Route exact path='/branding-plan/:id' component={BrandingPlan}/>
                <Route exact path={['/request/:id/:s', '/request']} component={Request}/>
                <Route exact path='/marketing' component={Marketing}/>
                <Route exact path='/branding' component={Branding}/>
                <Route exact path='/logo-design' component={LogoDesign}/>
                <Route exact path='/plan/:id' component={Plan}/>
                <Route exact path='/web-plans' component={Plans}/>
                <Route exact path='/web' component={Web}/>
                <Route exact path='/specs' component={Specs}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact}/>
                <Route path={['/']} component={Home}/>
            </Switch>
        </div>
    )
}