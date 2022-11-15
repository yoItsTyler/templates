import { useHistory } from 'react-router-dom';
import styles from './styles.module.css';
import can85 from '../../images/can85.webp';
import codeBackDrop from '../../images/codeBackDrop.webp';
import products from '../../images/products.webp';
import colorSwirl from '../../images/colorSwirl.webp';




export const Home = () => {
    const history = useHistory();

    return(
        <div className={styles.main} >

          



            <div className={styles.tOne} >
                <div className={styles.brImage} style={{ backgroundImage: 'url(' + products + ')', backgroundSize: 'cover', backgroundPosition: 'center',  maxWidth: '100%', height: '100%'}}>
                <div className={styles.title}>Title</div>




</div>



                </div>
            Home Tile One
           

           

        </div>
    );
};