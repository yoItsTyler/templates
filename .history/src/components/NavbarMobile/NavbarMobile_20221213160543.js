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

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };



    const DropDown = () => {

        return(
            <div>
                  <div className={styles.dropDown}>
                      <div className={styles.iconCont}>
                      <Icon path={mdiClose} className={styles.close}
                      onClick={toggleMenu}/>
                      </div>
                      
                        <div className={styles.page2}>Website</div>
                        <div className={styles.page2}>Branding</div>
                        <div className={styles.page2}>Marketing</div>
                        <div className={styles.page2}>About</div>
                        <div className={styles.page2}>Contact</div>

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