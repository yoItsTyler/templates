import { useHistory } from 'react-router-dom';
import styles from './styles.module.css';
import can from '../../images/can.png';
import can100 from '../../images/can100.webp';
import can85 from '../../images/can85.webp';
import can50 from '../../images/can50.webp';


export const Home = () => {
    const history = useHistory();

    return(
        <div className={styles.main} >

          



            <div className={styles.tOne} style={{ backgroundImage: 'url(' + can + ')', backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw', overflow: 'hidden'}}>
            Home Tile One
            <div className={styles.title}>Title</div>




            </div>

           

        </div>
    );
};