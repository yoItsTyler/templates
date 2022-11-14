import { Route, Switch } from 'react-router-dom';
import { Home } from '../Home';
import { Navbar } from '../Navbar/Navbar';
import styles from './styles.module.css';





export const App = () => {


    return(
        <div className={styles.main}>
            <Navbar/>
            <Switch>
                <Route path={['/']} component={Home}/>
            </Switch>
        </div>
    )
}