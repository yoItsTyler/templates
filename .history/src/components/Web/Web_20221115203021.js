import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import styles from './styles.module.css';
import webHero from '../../images/webHero.png'
/*<div className={styles.centerX}>
                        <img src ={webHero}/>
                    </div>*/

export const Web = () => {

    return (
        <div className={styles.main}>
            <NavbarWeb />

            <div className={styles.tile}>

                <div className={styles.container}>
                 
                        <img src ={webHero}/>

                        <div className={styles.txtRow}>
                            <div className={styles.txt33}>
                                Say hello to your new home, on the 

                            </div>
                            <div className={styles.txt33}>
                             {" "}
                                
                            </div>
                            <div className={styles.txt33}>
                             internet
                                
                            </div>
                            <div className={styles.txt33}>
                            .
                                
                            </div>
                        </div>
                    


                </div>

            </div>


            <div className={styles.tile}>
                <div className={styles.container}>


                </div>

            </div>


            <div className={styles.tile}>
                <div className={styles.container}>


                </div>

            </div>


        </div>
    )
}