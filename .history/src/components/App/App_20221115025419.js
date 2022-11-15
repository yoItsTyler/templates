import { Route, Switch } from 'react-router-dom';
import { Home } from '../Home';
import { Navbar } from '../Navbar/Navbar';
import styles from './styles.module.css';





export const App = () => {
    
        const [windowDimension, setWindowDimension] = useState(null);

        useEffect(()=> {
            setWindowDimension(window.innerWidth);
        },[]);

        useEffect(()=> {
            function handleResize(){
                setWindowDimension(window.innerWidth);
            }     
            
            window.addEventListener("resize", handleResize);
            return() => window.removeEventListener("resize", handleResize);

        },[]);

        const isMobile = windowDimension <=640;
       
        console.log(isMobile);


    return(
        <div className={styles.main}>
            <Navbar/>
            <Switch>
                <Route path={['/']} component={Home}/>
            </Switch>
        </div>
    )
}