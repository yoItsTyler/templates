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