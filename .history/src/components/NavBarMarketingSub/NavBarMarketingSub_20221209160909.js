import { useHistory } from 'react-router-dom';
import styles from './styles.module.css';


export const NavBarMarketingSub = () => {
    const history = useHistory();

    /*  
            
            
            
            
                <div className={styles.row}>
                    <div className={styles.title}>
                        Website Development
                    </div>
                    <div className={styles.btnRow}>
                        <div className={styles.btnTxt}>Overview</div>
                        <div className={styles.btnTxt}>Specs</div>
                        <div className={styles.requestBtn}>Request</div>
                    </div>



                </div>*/


    return (
        <div className={styles.main}>
            <div className={styles.column}>
                <div className={styles.topSpace}></div>
                <div className={styles.row}>
                    <div className={styles.title}>
                        Marketing
                    </div>
                    <div className={styles.btnRow}>
                        <div className={styles.btnTxt} onClick={() => history.push('./marketing')}
                        >Overview</div>
                        <div className={styles.requestBtn} onClick={() => history.push('/request/marketing/lv')}
                        >Request</div>
                    </div>



                </div>



            </div>
        

          
        </div>
    )
}