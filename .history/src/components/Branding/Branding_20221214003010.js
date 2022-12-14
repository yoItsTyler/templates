import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import { NavBarBrandingSub } from '../NavBarBrandingSub/NavBarBrandingSub';
import styles from './styles.module.css';
import logo from '../../images/luneVista.png';
import logoB from '../../images/logoB.png';
import aA from '../../images/aA.png'
import aA2 from '../../images/aA2.png'
import aA3 from '../../images/aA3.png'
import arrowLong from '../../images/arrowLong.png';
import drawnLine from '../../images/drawnLine.png';
import roadmap from '../../images/roadmap.png';
import checklist from '../../images/checklist.png';
import spectivFull from '../../images/spectivFull.png';
import behindBranding from '../../images/behindBranding.png';
import onTheWeb from '../../images/onTheWeb.png';
import promote from '../../images/promote.png';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

export const Branding = () => {
       const history = useHistory();
       useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    return (
        <div className={styles.main}>
            <NavbarWeb />
           <NavBarBrandingSub/>

            <div className={styles.brandingHero}>
                <img src={logoB} className={styles.logo} />

                <div className={styles.heroTitle}>
                    Your <span className={styles.fuIdTxt}>future identity</span> is waiting to be found.
                </div>

                <img src={arrowLong} className={styles.arrow} />
            </div>

            <div className={styles.yourTile}>
                <div className={styles.yourContents}>
                    <div className={styles.yourTxt}>
                        Your brand.<br></br>
                        Your logo.<br></br>
                        Your font.<br></br>
                        Your design.<br></br>
                        Your identity.
                    </div>
                    <img src={aA} className={styles.aApic} />
                </div>
            </div>

            <div className={styles.perspectiveTile}>
                <div className={styles.persCont}>
                    <div className={styles.persTitle}>
                        Influence the <span className={styles.perspective}>perspective</span> of your business.
                    </div>
                    <div className={styles.persTxt}>
                        Promote instant recognition of your business’s identity creating modern, elegant, and timeless designs that grow with you. We focus on strategic and artistic designs that ensure you're capturing the attention of your potential audience and do not blend in with your competition.
                    </div>
                </div>
                <img src={drawnLine} className={styles.linePic}/>
            </div>

            <div className={styles.checkTile}>
            <div className={styles.splitRow}>
                <div className={styles.checkCont}>
                    <div className={styles.compTitle}>
                        Complete your checklist
                    </div>
                    <div className={styles.bsTitle}>
                        Brand Strategy
                    </div>
                    <div className={styles.checkTxt}>
                        Overcome your challenges and meet your goals. Find out where you and your business can grow through your brand’s image.
                    </div>
                    <img src={roadmap} className={styles.roadmapPic} />
                </div>
                <img src={checklist} className={styles.checklistPic} />
                </div>
            </div>

            <div className={styles.cdTile}>
                
                    <div className={styles.cdCont}>
                        <div className={styles.cdTitle}>
                            Cohesive Design
                        </div>
                        <div className={styles.cdTxt}>
                            We focus on creating unique designs that integrate your style. Complimenting and reflecting the identity of the business or professional we are working with.
                        </div>
                    </div>
                    <div className={styles.spectImg}>
                        <img src={spectivFull} className={styles.spectivFullPic} />
                    </div>
            </div>
            
            <div className={styles.pricingPlans}>
                <div className={styles.rows}>

                    <div className={styles.column}>
                        <img src={aA} className={styles.planPic} />
                        <div className={styles.planT}>
                            Logo Design
                        </div>
                        <div className={styles.txtP}
                        >Where your brand begins and how you are remembered.
                        </div>
                        <div className={styles.txt}
                        >  Custom logo
                        </div>
                        <div className={styles.txt}
                        > Timeless and minimal design
                        </div>
                        <div className={styles.txt}
                        > Revisions
                        </div>
                        <div className={styles.txt}
                        > Copyright ownership
                        </div>
                        

                        <div className ={styles.subCont}>
                        <div className={styles.start}>Starting at</div>
                        <div className={styles.price}>$50.00 - $300.00</div>
                        <div className={styles.rBtn} onClick={() => {history.push('/request/branding/logo-design')}}>Request Now</div>
                        <div className={styles.lBtn} onClick={() => {history.push('/branding-plan/logo-design')}}
                        >Learn More</div>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <img src={aA2} className={styles.planPic} />
                        <div className={styles.planT}>
                            Identity Package
                        </div>
                        <div className={styles.txtP}
                        >Create more than just your logo with matching colors and font.
                        </div>
                        <div className={styles.txt}
                        >  Custom logo design
                        </div>
                        <div className={styles.txt}
                        > Color pallet
                        </div>
                        <div className={styles.txt}
                        > Font family
                        </div>
                        <div className={styles.txt}
                        > Patterns and backgrounds
                        </div>
                        <div className={styles.txt}
                        >  Revisions
                        </div>
                        <div className={styles.txt}
                        >  Copyright ownership
                        </div>
                    

                        <div className ={styles.subCont}>
                        <div className={styles.start}>Starting at</div>
                        <div className={styles.price}>$600.00</div>
                        <div className={styles.rBtn} onClick={() => {history.push('/request/branding/identity-package')}}>Request Now</div>
                        <div className={styles.lBtn} onClick={() => {history.push('/branding-plan/identity-package')}}
                        >Learn More</div>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <img src={aA3} className={styles.planPic} />
                        <div className={styles.planT}>
                            Brand Strategy
                        </div>
                        <div className={styles.txtP}
                        >Find out how design can push your business further.
                        </div>
                        <div className={styles.txt}
                        >  Custom logo design
                        </div>
                        <div className={styles.txt}
                        > Identity package
                        </div>
                        <div className={styles.txt}
                        > Branding use guide
                        </div>
                        <div className={styles.txt}
                        > Specific consultation
                        </div>
                        <div className={styles.txt}
                        >  Personalized 1:1 support
                        </div>
                        <div className={styles.txt}
                        >  Revisions
                        </div>
                        <div className={styles.txt}
                        >  Copyright ownership
                        </div>

                        <div className ={styles.subCont}>
                        <div className={styles.start}>Starting at</div>
                        <div className={styles.price}>$900.00</div>
                        <div className={styles.rBtn} onClick={() => {history.push('/request/branding/brand-strategy')}}>Request Now</div>
                        <div className={styles.lBtn} onClick={() => {history.push('/branding-plan/brand-strategy')}}
                        >Learn More</div>
                        </div>
                    </div>

                </div>
            </div>


            <div className={styles.centerApps}>

            <div className={styles.appCont}>
                <div className={styles.purpleBox} style={{backgroundImage: 'url(' + behindBranding  + ')', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className={styles.lTxtCont}>
                        <div className={styles.wTxt}>Logo & Branding</div>
                        <div className={styles.sTxt}>See Luna Vista Design Plans</div>
                        <div className={styles.lTxt} onClick={() => history.push('/branding-plans')}>Learn More</div>
                    </div>
                 

                </div>

                <div className={styles.splitRow2}>

                <div className={styles.identityBox} style={{backgroundImage: 'url(' + onTheWeb  + ')', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className={styles.lTxtCont}>
                        <div className={styles.wTxt}>Online</div>
                        <div className={styles.sTxt}>Put Yourself <br></br> on the Web</div>
                        <div className={styles.lTxt} onClick={() => history.push('/web')}>Learn More</div>
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
                    Which Design plan is right for you?
                </div>
                <div className={styles.compareTxt} onClick={() => history.push('/branding-plans')}>
                    Compare all Design pricing plans
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
    );
};