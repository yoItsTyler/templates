import styles from './styles.module.css';
import logo2 from '../../images/LuneVistaLogo.png';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React, { Component } from 'react'
import Icon from '@mdi/react'
import { mdiClose } from '@mdi/js';
import logo from '../../images/lvBLogo.png';


export const NavbarWeb = () => {
    const history = useHistory();


    const [mobileBool, setMobileBool] = useState(false);
    const [windowDimension, setWindowDimension] = useState(722)

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
       
    }

    useEffect(() => {
        setWindowDimension(window.innerWidth);
    }, []);

    useEffect(() => {
        function handleResize() {
            setWindowDimension(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowDimension <= 720;

    useEffect(() => {
        if (isMobile !== mobileBool) {
            setMobileBool(isMobile);
        };
        return isMobile;
    }, [isMobile]);

    useEffect(() => {
        if(mobileBool === false){
            setIsOpen(false);
        }
    },[mobileBool]);

    const [windowDH, setWindowDH] = useState(null);



  useEffect(() => {
   // setWindowDW(window.innerWidth);
    setWindowDH(window.innerHeight);
  }, []);

  let vh = windowDH * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);

  const getHeight = () => window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

  function useCurrentHeight() {
    let [height, setHeight] = useState(getHeight());

    useEffect(() => {
      let timeoutId = null;
      const resizeListener = () => {

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => setHeight(getHeight(), 50));
      };

      window.addEventListener('resize', resizeListener, false);
      //  window.addEventListener('scroll', resizeListener, false);

      return () => {
        window.removeEventListener('resize', resizeListener, false);
        //  window.removeEventListener('scroll', resizeListener, false);

      }
    }, [])
   // console.log('resize function ran');
    return height;
  }

  let h = useCurrentHeight();
  //console.log(h);



  useEffect(() => {
    let vh = h * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
   // console.log('vh', vh, 'h:', h);
    setWindowDH(h);
   // console.log('*after resize Listener VH was set in css as::', vh);

  }, [h]);




    const DropDown = () => {

        return(
            <div>
                  <div className={styles.dropDown}>
                      <div className={styles.iconCont}>
                      <Icon path={mdiClose} className={styles.close}
                      onClick={toggleMenu}/>
                      </div>
                      
                        <div className={styles.page2} onClick={() => history.push('/web')}
                        >Website</div>
                        <div className={styles.page2} onClick={() => history.push('/branding')}
                        >Branding</div>
                        <div className={styles.page2} onClick={() => history.push('/marketing')}
                        >Marketing</div>
                        <div className={styles.page2} onClick={() => history.push('/about')}
                        >About</div>
                        <div className={styles.page2} onClick={() => history.push('/contact')}
                        >Contact</div>

                        <img src={logo} className={styles.logo2}/>
                    </div>
            </div>
        )
    }





    // <div className={styles.falseDiv}></div>
    return (
        <div className={styles.main}>

            <div className={styles.row}>


                <div className={styles.logo}
                    onClick={() => history.push('/')}
                >
                    <img src={logo2} style={{ width: '100%', height: '' }} />

                </div>


               
                    


                        {isMobile ? (
                            <div className={styles.mobileMenu} onClick={toggleMenu}
                            >Menu</div>
                        ) : (
                            <div className={styles.pages}>
                            <div className={styles.page}
                                 onClick={() => history.push('/web')}
                                >Website</div>
                                <div className={styles.page} onClick={() => history.push('/branding')}
                                >Branding</div>
                                <div className={styles.page} onClick={() => history.push('/marketing')}
                                >Marketing</div>
                                <div className={styles.page} onClick={() => history.push('/about')}
                                >About</div>
                                <div className={styles.page} onClick={() => history.push('/contact')}
                                >Contact</div>
                            </div>

                        )}



                    </div>

                    {isOpen? (
                        <DropDown/>

                    ):(
                        <div></div>

                    )}

                  


                    


                </div>


           
         

            )
}