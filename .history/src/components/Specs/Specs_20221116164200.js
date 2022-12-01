import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import { NavBarWebSub } from '../NavBarWebSub/NavBarWebSub';
import styles from './styles.module.css';
import deskT from '../../images/Group 13spec.png';
import f57 from '../../images/Frame 57.png';
import f58 from '../../images/Frame 58.png';
import f59 from '../../images/Frame 59.png';
import f60 from '../../images/Frame 60.png';
import f61 from '../../images/Frame 61.png';
import f62 from '../../images/Frame 62.png';
import f63 from '../../images/Frame 63.png';
import f64 from '../../images/Frame 64.png';

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

            <div className={styles.container}>
                <div className={styles.iconCont}>
                    <img src={f57}/>
                </div>



            </div>
            



            </div>
            
            

        </div>
    )
}