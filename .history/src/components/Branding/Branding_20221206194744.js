import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import { NavBarWebSub } from '../NavBarWebSub/NavBarWebSub';
import styles from './styles.module.css';
import logo from '../../images/luneVista.png';
import logoB from '../../images/logoB.png';
import aA from '../../images/aA.png'
import arrowLong from '../../images/arrowLong.png';
import drawnLine from '../../images/drawnLine.png';
import roadmap from '../../images/roadmap.png';
import checklist from '../../images/checklist.png';
import spectivFull from '../../images/spectivFull.png';

export const Branding = () => {

    return(
        <div className={styles.main}>
            <NavbarWeb/>
            <NavBarWebSub/>

            <div className={styles.brandingHero}>
                <img src={logoB} className={styles.logo}/>

                <div className={styles.heroTitle}>
                    Your <span className={styles.fuIdTxt}>future identity</span> is waiting to be found.
                </div>

                <img src={arrowLong} className={styles.arrow}/>
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
                    <img src={aA} className={styles.aApic}/>
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
                    <img src={roadmap} className={styles.roadmapPic}/>
                </div>
                <img src={checklist} className={styles.checklistPic}/>
           </div>

           <div className={styles.cdTile}>
               <div className={styles.splitRow}>
               <div className={styles.cdCont}>
                    <div className={styles.cdTitle}>
                        Cohesive Design
                    </div>
                    <div className={styles.cdTxt}>
                    We focus on creating unique designs that integrate your style. Complimenting and reflecting the identity of the business or professional we are working with.
                    </div>
                </div> 
                <div className={styles.spectImg}>
                <img src={spectivFull} className={styles.spectivFullPic}/>
                </div>


               </div>
               
                
           </div>

        </div>
    );
};