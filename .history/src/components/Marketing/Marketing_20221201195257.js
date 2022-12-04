import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import { NavBarWebSub } from '../NavBarWebSub/NavBarWebSub';
import styles from './styles.module.css';
import graph from '../../images/Group 55.png';
import graph2 from '../../images/Group 56.png';

export const Marketing = () => {

    return(
        <div className={styles.main}>
            <NavbarWeb/>
            <NavBarWebSub/>


            <div className={styles.tile}>

                <div className={styles.title}>

                </div>

                <img src={graph} className={styles.graph}/>
                <img src={graph2} className={styles.graph2}/>

            


            </div>

        </div>
    );
};