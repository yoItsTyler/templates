import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import styles from './styles.module.css';
import { useHistory } from 'react-router-dom';
import contactPic from '../../images/contactPic.png';
import chatWht from '../../images/chatWht.png';


export const Contact = () => { 
    const history = useHistory();


    return ( 
        <div className={styles.main}>
            <NavbarWeb />
            <div className={styles.page}>

                <div className={styles.tile1} style={{backgroundImage: 'url(' + contactPic  + ')', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className={styles.container}>
                        <div className={styles.title}>Contact Us</div>
                        <img src={chatWht} className={styles.chat} />
                        <div className={styles.whtTxt}>Want to reach out to us?</div>
                        <div className={styles.blueTxt}>Chat with us Now</div>
                    </div>
                </div>

                


            </div>
        </div>
    )
}