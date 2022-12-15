import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import styles from './styles.module.css';
import webHero from '../../images/webHero.png'
import logo from '../../images/luneVista.png';
//import from '../../images/.png';
import cDesign from '../../images/coehesiveDesign.png';
import upTime from '../../images/uptime.png';
import responsiveDesign from '../../images/responsive.png';
import unlimitedBandwidth from '../../images/unlimitedBandwidth.png';
import eCommerce from '../../images/eCommerce.png';
import musicVideo from '../../images/musicVideo.png';
import pPlan from '../../images/proPlan.png';
import bPlan from '../../images/bizPlan.png';
import ePlan from '../../images/enterprisePlan.png';
import cWhatsBehind from '../../images/seeWhatsBehind.png';
import promote from '../../images/promote.png';
import identity from '../../images/identity.png';
import { NavBarWebSub } from '../NavBarWebSub/NavBarWebSub';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

<title>Website Devlopment | Lune Vista</title>


/*<div className={styles.centerX}>
                        <img src ={webHero}/>
                    </div>*/

export const Web = () => {
        const history = useHistory();
        useEffect(() => {
            window.scrollTo(0, 0)
          }, []);
    return (
        <div className={styles.main}>
            <NavbarWeb />
            <NavBarWebSub/>


            <div className={styles.tile1}>

                <div className={styles.container}>

                    <img src={webHero} className={styles.webHero}/>

                    <div className={styles.txtRow}>                     

                       

                        <div className={styles.sentence}>
                        Say hello to your new home, on the <span className={styles.redInternet}>internet</span>.</div>
                    </div>



                </div>

            </div>


            <div className={styles.tile2}>
                        <div className={styles.proWebTitile}>
                            Professional Website Design and Developement
                        </div>
                    <img src={cDesign} className={styles.cDesignPic} />

                    <div className={styles.cdContainer}>
                        <div className={styles.rainbowTitle}
                        >Cohesive Design</div>
                        <div className={styles.rainbow}
                        >Fitting your Vibe</div>
                        <div className={styles.rainbowSubTxt}
                        >We focus on creating unique websites that are designed to integrate with and display your brand's vibe and feel. It’s very important for us to design a website that compliments and reflects the identity of the business or professional we are working with.</div>
                    </div>
            </div>

            <div className={styles.tile1}>


                    <div className={styles.rainbowContainerTL}>
                        <div className={styles.rainbowTitle}
                        >Fast and Reliable Access</div>
                        <div className={styles.rainbow2}
                        >Ready for Your Audience</div>
                        <div className={styles.rainbowSubTxt}
                        >Your website is always up and running thanks to our secure and reliable hosting.</div>
                    </div>

                    <img src={upTime} className={styles.upTime}/>



            </div>


            <div className={styles.tile2}>

                <div>

                    <div className={styles.rainbowContainerTR}>
                        <div className={styles.rightBox}>
                        <div className={styles.rainbowTitle}
                        >Responsive CSS</div>
                        <div className={styles.rainbow2}
                        >Perfection on each Page</div>
                        <div className={styles.rainbowSubTxt}
                        >Functionally designed on all platforms to reach everyone, on any device.</div>
                    </div>
                    </div>
                   
                    <img src={responsiveDesign} className={styles.cssPic}/>
                   
                    

                    </div>
                    

            

            </div>

            <div className={styles.tile1}>
                <div className={styles.unlBandContainer}>
                    <div className={styles.unlBand}>
                    Unlimited Bandwidth</div>
                    <div className={styles.unlBandTxt}>
                    Handel high site traffic as needed with unlimited bandwidth. Yes, that's right we said unlimited.</div> 
                    <div className={styles.techSpecTxt}>
                    See all the <span className={styles.techSpecLink} onClick={() => history.push('/specs')}>tech specifications</span> we offer.</div> 
                    <div className={styles.learnMoreTxt} onClick={() => history.push('/specs')}>
                    Learn more</div>
                </div>

                <img src={unlimitedBandwidth} className={styles.unlBandPic}/>

            </div>

            <div className={styles.tile2}>
                <div className={styles.infoContainer}>
                    <div className={styles.whtTitle}>
                    eCommerce</div>
                    <div className={styles.colTitleBuy}>
                    Let visitors Shop and Buy</div>
                    <div className={styles.bodyTxt}>
                    Support and process payments online with a live eCommerce website. Allow users to purchase physical and digital products from you.</div>
                    <div className={styles.learnMoreTxt} onClick={() => history.push('/specs')}>
                    Learn more</div>
                </div>

                <img src={eCommerce} className={styles.secPic}/>

            </div>

            <div className={styles.tile2}>
                <div className={styles.infoContainer}>
                    <div className={styles.whtTitle}>
                    multi media players</div>
                    <div className={styles.colTitleJam}>
                    Jam Music & Binge Video</div>
                    <div className={styles.bodyTxt}>
                    Support, embed, and upload music and video on your website for your audience to consume.</div>
                    <div className={styles.learnMoreTxt} onClick={() => history.push('/specs')}>
                    Learn more</div>
                </div>

                <img src={musicVideo} className={styles.secPic}/>

            </div>

            <div className={styles.pricingPlans}>

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
                            <div className={styles.rBtn} onClick={() => {history.push('/request/professional/web')}}>Request Now</div>
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
                            <div className={styles.rBtn} onClick={() => {history.push('/request/business/web')}}>Request Now</div>
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
                            <div className={styles.rBtn} onClick={() => {history.push('/request/enterprise/web')}}>Request Now</div>
                            <div className={styles.lBtn} onClick={() => {history.push('/plan/enterprise')}}
                            >Learn More</div>
                            </div>
                        </div>
                </div>
            </div>

            <div className={styles.centerApps}>

            <div className={styles.appCont}>
                <div className={styles.purpleBox} style={{backgroundImage: 'url(' + cWhatsBehind  + ')', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className={styles.lTxtCont}>
                        <div className={styles.wTxt}>Website Developement</div>
                        <div className={styles.sTxt}>See what's behind Luna Vista</div>
                        <div className={styles.lTxt} onClick={() => history.push('/specs')}>Learn More</div>
                    </div>
                 

                </div>

                <div className={styles.splitRow2}>

                <div className={styles.identityBox} style={{backgroundImage: 'url(' + identity  + ')', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className={styles.lTxtCont}>
                        <div className={styles.wTxt}>Identity</div>
                        <div className={styles.sTxt}>Explore Your Branding Image</div>
                        <div className={styles.lTxt} onClick={() => history.push('/branding')}>Learn More</div>
                    </div>                

                </div>


                <div className={styles.promoteBox} style={{backgroundImage: 'url(' + promote  + ')', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className={styles.lTxtCont}>
                        <div className={styles.wTxt}>Promote</div>
                        <div className={styles.sTxt}>Boost Your Traffic</div>
                        <div className={styles.lTxt} onClick={() => history.push('/marketing')}>Learn More</div>
                    </div>               

                </div>


                </div>
                
            </div>
            </div>

            <div className={styles.askPlanSection}>
                <div className={styles.askPlan}>
                    Which Website plan is right for you?
                </div>
                <div className={styles.compareTxt} onClick={() => history.push('/web-plans')}>
                    Compare all Website pricing plans
                </div>
            </div>


            <div className={styles.fContainer}>
                        <div className={styles.footer}>
                            <div>Lune Vista © 2022</div>

                            <div>About</div>
                            <div>Privacy</div>
                            <div>Contact</div>

                        </div>
            </div>

        </div>
    )
}