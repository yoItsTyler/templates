import { Route, Switch } from 'react-router-dom';
import { Home } from '../Home';
import { Navbar } from '../Navbar/Navbar';
import styles from './styles.module.css';





export const App = () => {
//SNyq2IywKFoGGV3d6VTDd7i36AV7TxIT 
    return(
        <div className={styles.main}>            
            <Switch>
                <Route path={['/']} component={Home}/>
            </Switch>
        </div>
    )
}