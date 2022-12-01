import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import styles from './styles.module.css';
import webHero from '../../images/webHero.png'


export const Web = () => {

    return (
        <div className={styles.main}>
            <NavbarWeb />

            <div className={styles.tile}>
                <div className={styles.container}>
                    <div className={styles.middleCenter}>
                        
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