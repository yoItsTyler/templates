import { useHistory } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import styles from './styles.module.css';


export const Home = () => {
    const history = useHistory();

    return(
        <div className={styles.main}>

          



            <div className={styles.tOne}>
            Home Tile One
            </div>

           

        </div>
    );
};