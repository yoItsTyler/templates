import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './styles.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Icon } from '@mui/material';
import { Close } from '@mui/icons-material';

export const Navbar = () => {
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const DropDown = () => {
        return (
            <div className={styles.bg} onClick={toggleMenu}>
                <div className={`${styles.dropDown} ${isOpen ? styles.open : ''}`}>
                    <div className={styles.iconCont}>
                        <Icon className={styles.close}>
                            <Close onClick={toggleMenu} />
                        </Icon>
                    </div>

                    <div className={styles.page2} onClick={() => history.push('/')}
                    >Home</div>

                    <div className={styles.page2} onClick={() => {
                        const element = document.querySelector('.tThree');
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }
                        toggleMenu();
                    }}>Lessons</div>

                    <div className={styles.page2} onClick={() => {
                        const element = document.querySelector('.tFour');
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }
                        toggleMenu();
                    }}>Testimonials</div>

                    <div className={styles.page2} onClick={() => history.push('/resources')}
                    >Resources</div>

                    <div style={{backgroundColor:"#f0e68c"}} className={styles.page2} onClick={() => history.push('/consultation')}
                    >Book Free Consultation</div>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.main}>
            <div className={styles.row}>
                <div onClick={toggleMenu}>
                    <MenuIcon className={styles.menuIcon} fontSize='33px' />
                </div>
            </div>

            {isOpen ? (
                <DropDown />
            ) : (
                <div></div>
            )}
        </div>
    );
};