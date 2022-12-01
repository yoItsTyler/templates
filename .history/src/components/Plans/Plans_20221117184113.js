import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import { NavBarWebSub } from '../NavBarWebSub/NavBarWebSub';
import styles from './styles.module.css';
import chat from '../../images/chat.png';
import { useHistory } from 'react-router-dom';
//import chat from '../../images/.png';
import pPlan from '../../images/proPlan.png';
import bPlan from '../../images/bizPlan.png';
import ePlan from '../../images/enterprisePlan.png';
import webHero from '../../images/webHero.png';
import upTime from '../../images/uptime.png';


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

                        <div className ={styles.subCont}>
                        <div className={styles.start}>Starting at</div>
                        <div className={styles.price}>$800.00</div>
                        <div className={styles.rBtn}>Request Now</div>
                        <div className={styles.lBtn}>Learn More</div>
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
                        > Complex and unique design
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
                        <div className={styles.txt}
                        >  Advanced functionality
                        </div>

                        <div className ={styles.subCont}>
                        <div className={styles.start}>Starting at</div>
                        <div className={styles.price}>$1,200.00</div>
                        <div className={styles.rBtn}>Request Now</div>
                        <div className={styles.lBtn}>Learn More</div>
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
                        > Completely custom design
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
                        <div className={styles.txt}
                        >  Advanced functionality
                        </div>

                        <div className ={styles.subCont}>
                        <div className={styles.start}>Starting at</div>
                        <div className={styles.price}>$3,000.00</div>
                        <div className={styles.rBtn}>Request Now</div>
                        <div className={styles.lBtn}>Learn More</div>
                        </div>
                    </div>


                </div>




                <div className={styles.title}>
                    A closer look at Lune Vista Web Dev
                </div>

                <div className={styles.mediaContainer}>

                    <div className={styles.splitRow}>
                        <div className={styles.twoThirdBox}>
                            <img src ={webHero}  className ={styles.img}/>
                            <div className = {styles.txtRow}>
                                <div className={styles.boldTxt}>It all starts on the internet. Lune Vista Web Dev has a plan for anyone to get online.</div>
                                <div className={styles.lightTxt}></div>
                            </div>
                        </div>
                        <div className={styles.oneThirdBox}>
                            <div className={styles.img}>
                            <img src ={upTime} />
                            </div>
                            <div className = {styles.txtRow}>
                                <div className={styles.boldTxt}>It all starts on the internet. Lune Vista Web Dev has a plan for anyone to get online.</div>
                                <div className={styles.lightTxt}></div>
                            </div>
                        </div>

                    </div>


                </div>




            </div>

        </div>
    )
}