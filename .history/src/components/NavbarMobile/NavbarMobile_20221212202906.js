import styles from './styles.module.css';
import logo from '../../images/luneVista.png';
import search from '../../images/search.png';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';


export const NavbarMobile = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

const history = useHistory();

    const DropDown = () => {

        return(
            <div>
                  <div className={styles.pages}>
                        <div className={styles.page}>Website</div>
                        <div className={styles.page}>Branding</div>
                        <div className={styles.page}>Marketing</div>
                        <div className={styles.page}>About</div>
                        <div className={styles.page}>Contact</div>
                    </div>
            </div>
        )
    }


    return (
        <div className={styles.main}>

            <div className={styles.row}>


                <div className={styles.logo}>
                    <img src={logo} style={{width: '100%', height: ''}} />

                </div>


                  


                    <div className={styles.right}>
                    <div className={styles.menu}
                    onClick={toggleMenu}
                    
                    >Menu</div>

                    </div>

                   



                    
             









            </div>
            {isOpen? (
                        <DropDown/>

                    ):(
                        <div></div>

                    )}





        </div>

    )
}