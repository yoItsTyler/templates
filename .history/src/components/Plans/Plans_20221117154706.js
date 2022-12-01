import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import { NavBarWebSub } from '../NavBarWebSub/NavBarWebSub';
import styles from './styles.module.css';



export const Plans = () => {


    return(
        <div className={styles.main}>
            <NavbarWeb/>
            <NavBarWebSub/>
            <div className={styles.page}>
                
            </div>

        </div>
    )
}