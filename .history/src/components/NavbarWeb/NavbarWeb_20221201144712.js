import styles from './styles.module.css';
import logo2 from '../../images/LuneVistaLogo.png';
import search from '../../images/search.png';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';


export const NavbarWeb = () => {
    const history = useHistory();


    const [mobileBool, setMobileBool] = useState(false);
    const [windowDimension, setWindowDimension] = useState(722)

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





    // <div className={styles.falseDiv}></div>
    return (
        <div className={styles.main}>

            <div className={styles.row}>


                <div className={styles.logo}
                    onClick={() => history.push('/')}
                >
                    <img src={logo2} style={{ width: '100%', height: '' }} />

                </div>


                <div className={styles.pages}>
                    <div className={styles.page}>


                        {isMobile ? (
                            <div>Menu</div>
                        ) : (
                            <div>
                                <div onClick={() => history.push('/web')}
                                >Website</div>
                                <div className={styles.page}>Branding</div>
                                <div className={styles.page}>Marketing</div>
                                <div className={styles.page}>About</div>
                                <div className={styles.page}>Contact</div>
                            </div>

                        )}



                    </div>


                </div>


            </div>
            </div>

            )
}