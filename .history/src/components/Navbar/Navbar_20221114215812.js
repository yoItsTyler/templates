import styles from './styles.module.css';
import logo from '../../images/luneVista.png';
import search from '../../images/search.png';


export const Navbar = () => {


    return (
        <div className={styles.main}>

            <div className={styles.row}>


                <div className={styles.logo}>
                    <img src={logo} />

                </div>

                <div className={styles.rightSide}>
                    <div className={styles.pages}>
                        <div className={styles.page}>Website</div>
                        <div className={styles.page}>Branding</div>
                        <div className={styles.page}>Marketing</div>
                        <div className={styles.page}>About</div>
                        <div className={styles.page}>Contact</div>
                    </div>
                </div>









            </div>





        </div>

    )
}