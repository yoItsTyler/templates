import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import { NavBarWebSub } from '../NavBarWebSub/NavBarWebSub';
import styles from './styles.module.css';
import graph from '../../images/Group 55.png';
import graph2 from '../../images/Group 56.png';
import arrow from '../../images/arrow.png';
import macDev from '../../images/macDev.png';
import marketingBD from '../../images/marketingBD.png';
import identity from '../../images/identity.png';

export const Marketing = () => {

    return (
        <div className={styles.main}>
            <NavbarWeb />
            <NavBarWebSub />


            <div className={styles.tile}>

                <div className={styles.section}              
                >
                    <div className={styles.title}>
                    Strategic Marketing

                </div>

                <div className={styles.centerItem}>
                    <img src={graph} className={styles.graph} />
                </div>
                <div className={styles.subTxt}>
                    Grow by <span className={styles.blueGrad}>promoting</span> yourself to a bigger audience
                </div>

                <div className={styles.centerItem2}>
                    <img src={arrow} className={styles.arrow} />
                </div>


                </div>

                

                <div className={styles.section}> 
                <div className={styles.colCont}>

                
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
                </div>
                </div>
                <div className={styles.centerItem}>
                    <img src={graph2} className={styles.graph2}/>
                </div>

                <div className={styles.txtCont}>
                    <div className={styles.txt}>
                        Wondering how we can promote you?

                    </div>
                    <div className={styles.subTxt2}>
                        Learn more about Marketing plans
                    </div>
                </div>


                <div className={styles.centerApps}>

                    <div className={styles.appCont}>
                        <div className={styles.purpleBox} style={{ backgroundImage: 'url(' + marketingBD + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className={styles.lTxtCont}>
                          
                                <div className={styles.sTxt}>More comming to Lune Vista Marketing soon this March</div>
                            
                            </div>


                        </div>

                        <div className={styles.splitRow2}>

                            <div className={styles.identityBox} style={{ backgroundImage: 'url(' + identity + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className={styles.lTxtCont}>
                                    <div className={styles.wTxt}>Identity</div>
                                    <div className={styles.sTxt}>Explore Your Branding Image</div>
                                    <div className={styles.lTxt}>Learn More</div>
                                </div>

                            </div>


                            <div className={styles.promoteBox} style={{ backgroundImage: 'url(' + macDev + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className={styles.lTxtCont}>
                                    <div className={styles.wTxt}>Online</div>
                                    <div className={styles.sTxt}>Put Yourself on the Web</div>
                                    <div className={styles.lTxt}>Learn More</div>
                                </div>

                            </div>


                        </div>

                    </div>
                </div>


                <div className={styles.txtCont}>
                    <div className={styles.txt}>
                        Find out where we can help.
                    </div>
                    <div className={styles.subTxt2}>
                        Request Free Consultation Now
                    </div>
                </div>


                <div className={styles.fContainer}>
                        <div className={styles.footer}>
                            <div>Lune © Vista 2022</div>

                            <div>About</div>
                            <div>Privacy</div>
                            <div>Contact</div>

                        </div>
                </div>










            </div>

        </div>
    );
};