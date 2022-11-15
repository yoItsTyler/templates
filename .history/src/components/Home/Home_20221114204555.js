import { useHistory } from 'react-router-dom';
import styles from './styles.module.css';
import can from '../../images/can85.webp';
import codeBackDrop from '../../images/codeBackDrop.webp';
import products from '../../images/products.webp';
import colorSwirl from '../../images/colorSwirl.webp';

import canC from '../../images/canC.webp';


import arrows from '../../images/arrows.png'



export const Home = () => {
    const history = useHistory();


    /*
       <div className={styles.tOne} >
                
                <div className={styles.brImage} style={{ backgroundImage: 'url(' + products + ')', backgroundSize: 'cover', minWidth: '100%', minHeight: '100%' }}>
                    <div className={styles.title}>Logos & Branding</div>




                </div>
            </div>
    
    
    
    
    
    */

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

            </div>

            <div className={styles.tOne} style={{ backgroundImage: 'url(' + colorSwirl + ')', backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw' }}>

                <div className={styles.container2}>
                    <div className={styles.title}>Talk to Us Today</div>
                    <div className={styles.subTxt}>Let us create your vision</div>

                    <div className={styles.btnRow}>
                        <div className={styles.whiteBtn}>Request Now</div>
                        <div className={styles.blackBtn}>Learn More</div>
                    </div>
                </div>

            </div>

        </div>
    );
};