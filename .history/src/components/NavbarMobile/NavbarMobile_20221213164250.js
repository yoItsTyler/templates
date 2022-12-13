import styles from './styles.module.css';
import logo2 from '../../images/lvBLogo.png';
import search from '../../images/search.png';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import React, { Component } from 'react'
import Icon from '@mdi/react'
import { mdiClose } from '@mdi/js';
import logo from '../../images/luneVista.png';




export const NavbarMobile = () => {
    const history = useHistory();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [windowDH, setWindowDH] = useState(null);



  useEffect(() => {
    setWindowDW(window.innerWidth);
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

                        <img src={logo2} className={styles.logo2}/>
                    </div>
            </div>
        )
    }


    return (
        <div className={styles.main}>

            <div className={styles.row}>


                <div className={styles.logo}>
                    <img src={logo} style={{width: '100%', height: ''}} />

                </div>


                  


                    <div className={styles.right}>
                    <div className={styles.menu}
                    onClick={toggleMenu}
                    
                    >Menu</div>

                    </div>

                   



                    
             









            </div>
            {isOpen? (
                        <DropDown/>

                    ):(
                        <div></div>

                    )}





        </div>

    )
}