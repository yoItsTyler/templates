import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import { NavBarWebSub } from '../NavBarWebSub/NavBarWebSub';
import styles from './styles.module.css';
import chat from '../../images/chat.png';
//import chat from '../../images/.png';


export const Plans = () => {


    return(
        <div className={styles.main}>
            <NavbarWeb/>
            <NavBarWebSub/>
            <div className={styles.page}>

                <div className={styles.title}>
                    Request Lune Vista Website Developement
                </div>
                <img />



                <div className={styles.title}>
                    A closer look at Lune Vista Web Dev
                </div>


                

            </div>

        </div>
    )
}