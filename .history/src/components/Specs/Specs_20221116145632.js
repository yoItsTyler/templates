import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import { NavBarWebSub } from '../NavBarWebSub/NavBarWebSub';
import styles from './styles.module.css';


export const Specs = () => {


    return(
        <div className={styles.main}>
            <NavbarWeb/>
            <NavBarWebSub/>
            Specs

        </div>
    )
}