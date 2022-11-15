import { useHistory } from 'react-router-dom';
import styles from './styles.module.css';
import can from '../../images/can85.webp';
import codeBackDrop from '../../images/codeBackDrop.webp';
import products from '../../images/products.webp';
import colorSwirl from '../../images/colorSwirl.webp';

import canC from '../../images/canC.webp';


import arrows from '../../images/arrows.png'
import { isVisible } from '@testing-library/user-event/dist/utils';
import React, { MutableRefObject , useEffect, useRef, useState } from 'react';



export const Home = () => {
    const history = useHistory();


    /*
       <div className={styles.tOne} >
                
                <div className={styles.brImage} style={{ backgroundImage: 'url(' + products + ')', backgroundSize: 'cover', minWidth: '100%', minHeight: '100%' }}>
                    <div className={styles.title}>Logos & Branding</div>




                </div>
            </div>
    
    
    
    
    
   function useVisibility<T>(
        offset = 0,
        throttleMilliseconds = 100
    ) : [Boolean, MutableRefObject<T>] {
        const [isVisible, setIsVisible] = useState(false);
        const currentT = useRef<Element>();

        const onScroll = throttle(() => {
            if (!currentT.current) {
                setIsVisible(false);
                return;
            }const top = currentT.current.getBoundingClientRect().top;
            setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight);
            },throttleMilliseconds);

            useEffect(() => {
                document.addEventListener('scroll', onScroll, true);
                return ()=> document.removeEventListener('scroll', onScroll, true);
            });
            return [isVisible, currentT];
    } 

    function useWasSeen(offset = 0) {
        const[wasSeen, setWasSeen] = useState(
            typeof IntersectionObserver !== false
        );

        const ref = useRef()<HTMLDivElement>(null);
        useEffect(() => {
            if (ref.current && !wasSeen) {
              const observer = new IntersectionObserver(
                ([entry]) => entry.isIntersecting && setWasSeen(true), {rootMargin: offset + 'px'}
              );
              observer.observe(ref.current);
              return () => {
                observer.disconnect();
              };
            }
          }, [wasSeen]);
          return [wasSeen, ref];



    }

    const [wasSeen, ref] = useWasSeen();
*/ 

        const handleScroll = () => {
            let scroll = window.scrollY;
            console.log('scrolling to => ', window.scrollY);
            return scroll;
            
        };

        useEffect(() => {
            window.addEventListener('scroll', handleScroll, true);
          
            // Remove the event listener
            return () => {
              window.removeEventListener('scroll', handleScroll, true);
            };
            
          }, [window.scroll()]);

   // const [isVisible, currentT] = useVisibility<HTMLDivElement>(100);

    return (
        <div className={styles.main} >

            <div className={styles.tOne} style={{ backgroundImage: 'url(' + products + ')', backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw' }}>

                <div className={styles.container}>
                    <div className={styles.title}>Logos & Branding</div>
                    <div className={styles.subTxt}>Timeless coehesive designs</div>

                    <div className={styles.btnRow}>
                        <div className={styles.whiteBtn}>Request Now</div>
                        <div className={styles.blackBtn}>Learn More</div>


                    </div>


                </div>

            </div>

            <div className={styles.tOne} style={{ backgroundImage: 'url(' + codeBackDrop + ')', backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw' }}>

                <div className={styles.container2}>
                    <img src={arrows} className={styles.arrows} />
                    <div className={styles.title2}>Website Developement</div>
                    <div className={styles.subTxt}>Where you live online</div>

                    <div className={styles.btnRow}>
                        <div className={styles.whiteBtn}>Request Now</div>
                        <div className={styles.blackBtn}>Learn More</div>
                    </div>
                </div>

                <div className={styles.scrollPad} ></div>

            </div>

            <div className={styles.tOne} style={{ backgroundImage: 'url(' + canC + ')', backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw' }}>

                <div className={styles.container}>
                    <div className={styles.titleB}>Digital Marketing</div>
                    <div className={styles.subTxtB}>Attract more customers</div>

                    <div className={styles.btnRow}>
                        <div className={styles.whiteBtn}>Request Now</div>
                        <div className={styles.blackBtn}>Learn More</div>
                    </div>
                </div>
                <div className={styles.scrollPad}></div>

            </div>

            <div className={styles.tOne} style={{ backgroundImage: 'url(' + colorSwirl + ')', backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw' }}>

                <div className={styles.container2}>
                    <div className={styles.title2}>Let us create your vision</div>
                    <div className={styles.subTxt}>Talk to Us Today</div>

                    <div className={styles.btnRow2}>
                        <div className={styles.whiteBtn}>Free Consultation </div>
                       
                    </div>
                </div>
                <div className={styles.fContainer}>
                <div className={styles.footer}>
                    <div>Lune © Vista 2022</div>

                    <div>About</div>
                    <div>Privacy</div>
                    <div>Contact</div>

                </div>
                </div>

                <div className={styles.scrollPad}></div>
                


            </div>

        </div>
    );
};