import { useHistory } from 'react-router-dom';
import styles from './styles.module.css';


export const Home = () => {
    const history = useHistory();

    return(
        <div className={styles.main}>

            Home

        </div>
    );
};