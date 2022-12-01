import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import { NavBarWebSub } from '../NavBarWebSub/NavBarWebSub';
import styles from './styles.module.css';
import chat from '../../images/chat.png';
import { useHistory } from 'react-router-dom';
//import chat from '../../images/.png';


export const Plans = () => {
    const history = useHistory();


    return(
        <div className={styles.main}>
            <NavbarWeb/>
            <NavBarWebSub/>
            <div className={styles.page}>

                <div className={styles.title}>
                    Request Lune Vista Website Developement
                </div>
                <img src ={chat}/>

                <div className={styles.txtCont}>
                <div className={styles.txt}>
                    Which Website pan is right for you?

                </div>
                <div className={styles.subTxt} onClick={() => history.push('/web-plans')}>
                    Compare all Website pricing pans

                </div>
            </div>




                <div className={styles.title}>
                    A closer look at Lune Vista Web Dev
                </div>


                

            </div>

        </div>
    )
}