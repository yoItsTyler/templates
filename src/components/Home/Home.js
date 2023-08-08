import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import styles from './styles.module.css';


export const Home = () => {
    const history = useHistory();

    return(
        <div className={styles.main}>
            <div className={styles.navBar}>
            <div className={styles.lSCont}>
                <Button variant='outlined' onClick={() => history.push('/signup')}
                > Sign Up </Button>
                <Button variant='contained' onClick={() => history.push('/login')}
                > Login</Button>
            </div>
            </div>

          



            <div className={styles.tOne}>
            Home Tile One
            <div className={styles.title}>Title</div>




            </div>

           

        </div>
    );
};