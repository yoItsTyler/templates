import { useHistory } from 'react-router-dom';
import styles from './styles.module.css';
import codeBackDrop from '../../images/codeBackDrop.webp';
import products from '../../images/products.webp';
import colorSwirl from '../../images/colorSwirl.webp';

import canC from '../../images/canC.webp';


import arrows from '../../images/arrows.png'

import React, { useEffect, useRef, useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { NavbarMobile } from '../NavbarMobile';



export const Home = () => {



    const deskTxtSize = { titleSize: "50px", subSize: "27px" };
    const mobileTxtSize = { titleSize: "27px", subSize: "16px" };


   
    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);




    const [txtSize, setTxtSize] = useState(deskTxtSize);

    /// const [titleSize, setTitleSize] = useState(deskTitleSize);

    /*

    useEffect(() => {
        
           if(propBool !== undefined || null){
            setIsMobile(propBool);

           }
        

        
    }, [propBool]);


    useEffect(() => { 

        if(isMobile !== null || undefined){
            if(isMobile !== mobile){
                if(isMobile === true){

                    setMobile(true);
                    
        
        
                } else if (isMobile === false){
                    setMobile(false);
        
                }


            }
            


        }
     
        
    }, [isMobile]);

    */

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

    /*useEffect(() => {  
        console.log(txtSize);
    }, [txtSize]);*/













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
            typeof IntersectionObserver !== true
        );

        const ref = useRef();
        useEffect(() => {
            if (ref && !wasSeen) {
              const observer = new IntersectionObserver(
                ([entry]) => entry.isIntersecting && setWasSeen(true), {rootMargin: offset + 'px'}
              );
              observer.observe(ref);
              return () => {
                observer.disconnect();
              };
            }
          }, [wasSeen]);
          return [wasSeen, ref];



    }
    

    const [wasSeen, ref] = useWasSeen();*/









    const ref = useRef();








    /*  const handleScroll = () => {
          let scrollYz = window.scrollY;
          console.log('scrolling to => ', scrollYz);
          //console.log('isvisible?', isVisible)
         
         

        //  UseIntersection();
          return scrollYz;
          
      };
      useEffect(() => {
          window.addEventListener('scroll', handleScroll, true);
        
          // Remove the event listener
          return () => {
            window.removeEventListener('scroll', handleScroll, true);
          };
          
        }, []);*/

    // const [isVisible, currentT] = useVisibility<HTMLDivElement>(100);







    return (
        <div className={styles.main} >
            {isMobile ? (
                <NavbarMobile />
            ) : (
                <Navbar />

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
                        <div className={styles.whiteBtn} onClick={() => history.push('/request')}
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
        <div className={styles.whiteBtn} onClick={() => history.push('/request')}
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
                        <div className={styles.whiteBtn} onClick={() => history.push('/request')}
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