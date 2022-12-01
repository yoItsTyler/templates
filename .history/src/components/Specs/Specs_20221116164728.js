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
import f65 from '../../images/Frame 65.png';


/*<div className={styles.iconCont}>
 </div>

*/

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
                
                    <img src={f57}/>
                    <img src={f58}/>
                    <img src={f59}/>
                    <img src={f60}/>
                    <img src={f61}/>
                    <img src={f62}/>
                    <img src={f63}/>
                    <img src={f64}/>
                    <img src={f65}/>
               



            </div>
            



            </div>
            
            

        </div>
    )
}