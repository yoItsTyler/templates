import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import { NavBarWebSub } from '../NavBarWebSub/NavBarWebSub';
import styles from './styles.module.css';
import deskT from '../../images/Group 13spec.png';

export const Specs = () => {


    return(
        <div className={styles.main}>
            <NavbarWeb/>
            <NavBarWebSub/>

            <div className={styles.page}>
                <div className={styles.specCont}>
            <div className={styles.specsT}>Specs</div>
            <img src={deskT} className ={styles.deskT}/>
            </div>

            <div className={styles.line}></div>

            <div className={styles.glance}>At a Glance</div>
            



            </div>
            
            

        </div>
    )
}