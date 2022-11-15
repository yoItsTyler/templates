import { useHistory } from 'react-router-dom';
import styles from './styles.module.css';
import can85 from '../../images/can85.webp';
import codeBackDrop from '../../images/codeBackDrop.webp';
import products from '../../images/products.webp';
import colorSwirl from '../../images/colorSwirl.webp';








export const Home = () => {
    const history = useHistory();


    /*
       <div className={styles.tOne} >
                
                <div className={styles.brImage} style={{ backgroundImage: 'url(' + products + ')', backgroundSize: 'cover', minWidth: '100%', minHeight: '100%' }}>
                    <div className={styles.title}>Logos & Branding</div>




                </div>
            </div>
    
    
    
    
    
    */ 

    return (
        <div className={styles.main} >

               <div className={styles.tOne} >
                
                <div className={styles.brImage} style={{ backgroundImage: 'url(' + products + ')', backgroundSize: 'cover', width: '100vw'}}>
                    <div className={styles.title}>Logos & Branding</div>




                </div>
            </div>





         





        </div>
    );
};