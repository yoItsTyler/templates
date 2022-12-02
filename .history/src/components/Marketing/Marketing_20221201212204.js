import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import { NavBarWebSub } from '../NavBarWebSub/NavBarWebSub';
import styles from './styles.module.css';
import graph from '../../images/Group 55.png';
import graph2 from '../../images/Group 56.png';
import arrow from '../../images/arrow.png';

export const Marketing = () => {

    return(
        <div className={styles.main}>
            <NavbarWeb/>
            <NavBarWebSub/>


            <div className={styles.tile}>

                <div className={styles.title}>
                    Strategic Marketing

                </div>

                <div className={styles.centerItem}>
                <img src={graph} className={styles.graph}/>
                </div>
                <div className={styles.subTxt}>
                    Grow by <span className={styles.blueGrad}>promoting</span> yourselft to a bigger audience
                </div>

                <div className={styles.centerItem}>
                <img src={arrow} className={styles.arrow}/>
                </div>
                
                <div className={styles.leftCol}
                >
                    <div className={styles.bT1}>
                        Expand your customer leads.
                    </div>
                    <div className={styles.blueTitle}>
                        Promote Yourself
                    </div>
                    <div className={styles.bT2}>
                        Find a bigger audience for your products or services to increase alses. Find out exactly who your target audience is and capitalize on the opportunity.
                    </div>

                </div>

                <div className={styles.centerItem}>
                <img src={graph2} className={styles.graph2}/>



                <div className={styles.txtCont}>
                <div className={styles.txt}>
                    Find out where we can help.

                </div>
                <div className={styles.subTxt2}>
                    Learn more about Marketing plans
                    
                </div>
            </div>
                </div>


                

                
                

            


            </div>

        </div>
    );
};