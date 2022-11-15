import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../Home';
import { Navbar } from '../Navbar/Navbar';
import { NavbarMobile } from '../NavbarMobile';
import styles from './styles.module.css';





export const App = () => {

    const [mobileBool, setMobileBool] = useState(false);
    
        const [windowDimension, setWindowDimension] = useState(714);

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

        const isMobile = windowDimension <=714;
      


        useEffect(()=> {
            console.log('mobileBool', mobileBool);
            return mobileBool;
           
            
        },[mobileBool]);


        useEffect(()=> {
            setMobileBool(isMobile);

            console.log(isMobile);


            return isMobile;
           
            
        },[isMobile]);


       
        
        


        //


    return(
        <div className={styles.main}>
            {isMobile ? (
                <NavbarMobile />
            ) : (
                <Navbar />

            )}
           
            <Switch>
                <Route path={['/']} component={() => (<Home props={isMobile}/>)}/>
            </Switch>
        </div>
    )
}