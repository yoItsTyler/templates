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
import bandwidth from '../../images/unlimitedBandwidth.png';
import jam from '../../images/jamGlance.png';
import cWhatsBehind from '../../images/seeWhatsBehind.png';
import promote from '../../images/promote.png';
import identity from '../../images/identity.png';

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
                        <div className={styles.rBtn} onClick={() => {history.push('/request/professional')}}>Request Now</div>
                        <div className={styles.lBtn} onClick={() => {history.push('/plan/professional')}}
                        >Learn More</div>
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
                        <div className={styles.rBtn} onClick={() => {history.push('/request/business')}}>Request Now</div>
                        <div className={styles.lBtn} onClick={() => {history.push('/plan/business')}}
                        >Learn More</div>
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
                        <div className={styles.rBtn} onClick={() => {history.push('/request/enterprise')}}>Request Now</div>
                        <div className={styles.lBtn} onClick={() => {history.push('/plan/enterprise')}}
                        >Learn More</div>
                        </div>
                    </div>


                </div>




                <div className={styles.title}>
                    A closer look at Lune Vista Web Dev
                </div>

                <div className={styles.mediaContainer}>

                    <div className={styles.splitRow}>
                        <div className={styles.twoThirdBox}>
                        <div className={styles.imgC}>
                            <img src ={webHero}  className ={styles.img}/>
                            </div>
                            <div className = {styles.txtRow}>
                                <div className={styles.boldTxt}>It all starts on the internet. Lune Vista Web Dev has a plan for anyone to get online.</div>
                                <div className={styles.lightTxt}></div>
                            </div>
                        </div>
                        <div className={styles.oneThirdBox}>
                            <div className={styles.imgC}>
                            <img src ={upTime} className={styles.img}/>
                            </div>
                            <div className = {styles.txtRow}>
                                <div className={styles.boldTxt}>Stay online. Providing powerful servers ready for your audience.</div>
                                <div className={styles.lightTxt}></div>
                            </div>
                        </div>

                    </div>




                    <div className={styles.fullCont}>

                    <div className={styles.boldTxt}>It all starts on the internet. Lune Vista Web Dev has a plan for anyone to get online.</div>

                    <div className={styles.imgC2}>
                            <img src ={jam}  className ={styles.img}/>
                            </div>


                    </div>






                    <div className={styles.splitRow}>

                    <div className={styles.oneThirdBox}>
                            <div className={styles.imgC}>
                            <img src ={bandwidth} className={styles.img}/>
                            </div>
                            <div className = {styles.txtRow}>
                                <div className={styles.boldTxt}>Unlimited Bandwidth. Providing scaleable powerful website performance.</div>
                                <div className={styles.lightTxt}></div>
                            </div>
                        </div>
                        
                        <div className={styles.twoThirdBox}>
                        
                            <div className = {styles.txtRow}>
                                <div className={styles.boldTxt}>Responsive Cascading Style Sheets. For anyone on anything.</div>
                                <div className={styles.lightTxt}></div>
                            </div>
                            <div className={styles.imgC}>
                            <img src ={pPlan}  className ={styles.img}/>
                            </div>
                        </div>
                        
                    </div>


                </div>

                <div className={styles.txtCont2}>
                <div className={styles.txt2}>
                    Find out where we can help.

                </div>
                <div className={styles.subTxt2} onClick={() => {history.push('/request/')}}>
                    Request Free Consultation Now
                    
                </div>
            </div>

            <div className={styles.appCont}>
                <div className={styles.purpleBox} style={{backgroundImage: 'url(' + cWhatsBehind  + ')', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className={styles.lTxtCont}>
                        <div className={styles.wTxt}>Website Developement</div>
                        <div className={styles.sTxt}>See what's behind Luna Vista</div>
                        <div className={styles.lTxt}>Learn More</div>
                    </div>
                 

                </div>

                <div className={styles.splitRow2}>

                <div className={styles.identityBox} style={{backgroundImage: 'url(' + identity  + ')', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className={styles.lTxtCont}>
                        <div className={styles.wTxt}>Website Developement</div>
                        <div className={styles.sTxt}>See what's behind Luna Vista</div>
                        <div className={styles.lTxt}>Learn More</div>
                    </div>                

                </div>


                <div className={styles.promoteBox} style={{backgroundImage: 'url(' + promote  + ')', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className={styles.lTxtCont}>
                        <div className={styles.wTxt}>Website Developement</div>
                        <div className={styles.sTxt}>See what's behind Luna Vista</div>
                        <div className={styles.lTxt}>Learn More</div>
                    </div>               

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
         
            

        </div>
    )
}