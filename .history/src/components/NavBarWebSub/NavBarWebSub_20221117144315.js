import styles from './styles.module.css';


export const NavBarWebSub = () => {


    return (
        <div className={styles.main}>

            <div className={styles.column}>
                <div className={styles.row}>
                    <div className={styles.title}>
                        Website Development
                    </div>
                    <div className={styles.btnRow}>
                        <div className={styles.btnTxt}>Overview</div>
                        <div className={styles.btnTxt}>Specs</div>
                        <div className={styles.requestBtn}>Request</div>
                    </div>



                </div>



            </div>
        </div>
    )
}