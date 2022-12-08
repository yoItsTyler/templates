import styles from './styles.module.css';
import logo from '../../images/luneVista.png';
import search from '../../images/search.png';
import { useHistory } from 'react-router-dom';


export const Navbar = () => {
    const history = useHistory();


    return (
        <div className={styles.main}>

            <div className={styles.row}>


                <div className={styles.logo}>
                    <img src={logo} style={{width: '100%', height: ''}} />

                </div>


                    <div className={styles.pages}>
                        <div className={styles.page}onClick={() => history.push('/web')}>Website</div>
                        <div className={styles.page}onClick={() => history.push('/branding')}>Branding</div>
                        <div className={styles.page}onClick={() => history.push('/marketing')}>Marketing</div>
                        <div className={styles.page}>About</div>
                        <div className={styles.page}>Contact</div>
                    </div>



                    <div className={styles.falseDiv}></div>
             









            </div>





        </div>

    )
}