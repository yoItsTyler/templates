import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../Home';
import { Navbar } from '../Navbar/Navbar';
import styles from './styles.module.css';





export const App = () => {
    
        const [windowDimension, setWindowDimension] = useState(700);

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
       
        
        useEffect(()=> {
            console.log(isMobile);
        },[isMobile]);


    return(
        <div className={styles.main}>
            <Navbar/>
            <Switch>
                <Route path={['/']} component={Home}/>
            </Switch>
        </div>
    )
}