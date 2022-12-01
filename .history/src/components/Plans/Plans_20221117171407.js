import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import { NavBarWebSub } from '../NavBarWebSub/NavBarWebSub';
import styles from './styles.module.css';
import chat from '../../images/chat.png';
import { useHistory } from 'react-router-dom';
//import chat from '../../images/.png';
import pPlan from '../../images/proPlan.png';
import bPlan from '../../images/bizPlan.png';
import ePlan from '../../images/enterprisePlan.png';


export const Plans = () => {
    const history = useHistory();


    return (
        <div className={styles.main}>
            <NavbarWeb />
            <NavBarWebSub />
            <div className={styles.page}>

                <div className={styles.title}>
                    Request Lune Vista Website Developement
                </div>
                <img src={chat} className={styles.chat} />

                <div className={styles.txtCont}>
                    <div className={styles.txt}>
                        Have questions about requesting Web Solutions?
                    </div>
                    <div className={styles.subTxt} onClick={() => history.push('/web-plans')}>
                        Chat with us Now
                    </div>
                </div>


                <div className={styles.rows}>

                    <div className={styles.column}>
                        <img src={pPlan} />
                        <div className={styles.planT}>
                            Professional Plan
                        </div>
                        <div className={styles.txtP}
                        >For personal use to grow your brand online getting it off the ground.
                        </div>
                        <div className={styles.txt}
                        >  Custom Domain
                        </div>
                        <div className={styles.txt}
                        > Simple and basic design
                        </div>
                        <div className={styles.txt}
                        > Unlimited bandwidth
                        </div>
                        <div className={styles.txt}
                        > 99.9% Uptime
                        </div>
                        <div className={styles.txt}
                        >  Responsive CSS
                        </div>
                        <div className={styles.txt}
                        >  SSL certificate
                        </div>
                    </div>

                    <div className={styles.column}>
                        <img src={bPlan} />
                        <div className={styles.planT}>
                            Business Plan
                        </div>
                        <div className={styles.txtP}
                        >For more advanced features like online payments, booking, and events.
                        </div>
                        <div className={styles.txt}
                        >  Custom Domain
                        </div>
                        <div className={styles.txt}
                        > Simple and basic design
                        </div>
                        <div className={styles.txt}
                        > Unlimited bandwidth
                        </div>
                        <div className={styles.txt}
                        > 99.9% Uptime
                        </div>
                        <div className={styles.txt}
                        >  Responsive CSS
                        </div>
                        <div className={styles.txt}
                        >  SSL certificate
                        </div>
                    </div>

                    <div className={styles.column}>
                        <img src={ePlan} />
                        <div className={styles.planT}>
                            Enterprise Plan
                        </div>
                        <div className={styles.txtP}
                        >For large scale projects requiring a complete, tailored solution.
                        </div>
                        <div className={styles.txt}
                        >  Custom Domain
                        </div>
                        <div className={styles.txt}
                        > Simple and basic design
                        </div>
                        <div className={styles.txt}
                        > Unlimited bandwidth
                        </div>
                        <div className={styles.txt}
                        > 99.9% Uptime
                        </div>
                        <div className={styles.txt}
                        >  Responsive CSS
                        </div>
                        <div className={styles.txt}
                        >  SSL certificate
                        </div>
                    </div>


                </div>




                <div className={styles.title}>
                    A closer look at Lune Vista Web Dev
                </div>




            </div>

        </div>
    )
}