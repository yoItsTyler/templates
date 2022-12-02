import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import { NavBarWebSub } from '../NavBarWebSub/NavBarWebSub';
import styles from './styles.module.css';
import logo from '../../images/luneVista.png';
import logoB from '../../images/logoB.png';

export const Branding = () => {

    return(
        <div className={styles.main}>
            <NavbarWeb/>
            <NavBarWebSub/>

            <div className={styles.branding}>
            <img src={logoB} className={styles.logo}/>

            </div>
           

        </div>
    );
};