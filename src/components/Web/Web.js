import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import styles from './styles.module.css';
import webHero from '../../images/webHero.png'
import logo from '../../images/luneVista.png';
//import from '../../images/.png';
import cDesign from '../../images/coehesiveDesign.png';
import upTime from '../../images/uptime.png';
import responsiveDesign from '../../images/responsive.png';
import unlimitedBandwidth from '../../images/unlimitedBandwidth.png';
import { NavBarWebSub } from '../NavBarWebSub/NavBarWebSub';




/*<div className={styles.centerX}>
                        <img src ={webHero}/>
                    </div>*/

export const Web = () => {

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
                    See all the <span className={styles.techSpecLink}>tech specifications</span> we offer.</div> 
                    <div className={styles.learnMoreTxt}>
                    Learn more</div>
                </div>

                <img src={unlimitedBandwidth} className={styles.unlBandPic}/>

            </div>

            <div className={styles.tile}>
                <div>


                </div>

            </div>


        </div>
    )
}