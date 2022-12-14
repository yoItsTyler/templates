import { useHistory } from 'react-router-dom';
import styles from './styles.module.css';
import codeBackDrop from '../../images/codeBackDrop.webp';
import products from '../../images/products.webp';
import colorSwirl from '../../images/colorSwirl.webp';

import canC from '../../images/canC.webp';


import arrows from '../../images/arrows.png'

import React, { useEffect, useRef, useState } from 'react';
import { NavBarHome } from '../NavBarHome/NavBarHome';
import { NavbarMobile } from '../NavbarMobile';



export const Home = () => {



    const deskTxtSize = { titleSize: "50px", subSize: "27px" };
    const mobileTxtSize = { titleSize: "27px", subSize: "16px" };


   
    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);




    const [txtSize, setTxtSize] = useState(deskTxtSize);

    

    const [mobileBool, setMobileBool] = useState(false);
    //const prevMobileBool = usePre

    const [windowDimension, setWindowDimension] = useState(720);

    useEffect(() => {
        setWindowDimension(window.innerWidth);
    }, []);

    useEffect(() => {
        function handleResize() {
            setWindowDimension(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);

    }, []);

    const isMobile = windowDimension <= 714;


    useEffect(() => {
        // console.log(isMobile);
        if (isMobile !== mobileBool) {
            setMobileBool(isMobile);
        };

        return isMobile;

    }, [isMobile]);


    useEffect(() => {
        // console.log('mobileBool', mobileBool);
        return mobileBool;
    }, [mobileBool]);
    // <Route path={['/']} component={() => (<Home props={mobileBool}/>)}/>


    useEffect(() => {

        if (mobileBool !== undefined || null) {
            if (mobileBool === true) {
                //setTitleSize(mobileTitleSize);
                setTxtSize(mobileTxtSize);


            } else if (mobileBool === false) {
                //setTitleSize(deskTitleSize);
                setTxtSize(deskTxtSize);
            }


        }


    }, [mobileBool]);

   





    return (
        <div className={styles.main} >
            {isMobile ? (
                <NavbarMobile />
            ) : (
                <NavBarHome />

            )}



            <div className={styles.tOne} style={{ backgroundImage: 'url(' + codeBackDrop + ')', backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw' }}>

                <div className={styles.container2}>
                    <img src={arrows} className={styles.arrows} />
                    <div className={styles.title2} style={{ fontSize: txtSize?.titleSize }}>Website Development</div>
                    <div className={styles.subTxt} style={{ fontSize: txtSize?.subSize }}>Where you live online</div>

                    <div className={styles.btnRow}>
                        <div className={styles.whiteBtn} onClick={() => history.push('/web-plans')}
                        >Request Now</div>
                        <div className={styles.blackBtn} onClick={() => history.push('/web')}
                        >Learn More</div>
                    </div>
                </div>


            </div>

           

            <div className={styles.tOne} style={{ backgroundImage: 'url(' + canC + ')', backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw' }}>

                <div className={styles.container}>
                    <div className={styles.titleB} style={{ fontSize: txtSize?.titleSize }}>Digital Marketing</div>
                    <div className={styles.subTxtB} style={{ fontSize: txtSize?.subSize }}>Attract more customers</div>

                    <div className={styles.btnRow}>
                        <div className={styles.whiteBtn} onClick={() => history.push('/request/marketing/lv')}
                        >Request Now</div>
                        <div className={styles.blackBtn} onClick={() => history.push('/marketing')}
                        >Learn More</div>
                    </div>
                </div>


            </div>

            <div className={styles.tOne} style={{ backgroundImage: 'url(' + products + ')', backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw' }}>

<div className={styles.container}>
    <div className={styles.title} style={{ fontSize: txtSize?.titleSize }}>Logos & Branding</div>
    <div className={styles.subTxt} style={{ fontSize: txtSize?.subSize }}>Timeless coehesive designs</div>

    <div className={styles.btnRow}>
        <div className={styles.whiteBtn} onClick={() => history.push('/branding-plans')}
        >Request Now</div>
        <div className={styles.blackBtn} onClick={() => history.push('/branding')}
        >Learn More</div>


    </div>


</div>

</div>

            <div className={styles.tOne} style={{ backgroundImage: 'url(' + colorSwirl + ')', backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw' }}>

                <div className={styles.container2}>
                    <div className={styles.title2} style={{ fontSize: txtSize?.titleSize }}>Let us create your vision</div>
                    <div className={styles.subTxt} style={{ fontSize: txtSize?.subSize }}>Talk to Us Today</div>

                    <div className={styles.btnRow2}>
                        <div className={styles.whiteBtn} onClick={() => history.push('/contact')}
                        >Free Consultation </div>
                    </div>


                    <div className={styles.fContainer}>
                        <div className={styles.footer}>
                            <div>Lune © Vista 2022</div>
                            <div>About</div>
                            <div>Privacy</div>
                            <div>Contact</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};