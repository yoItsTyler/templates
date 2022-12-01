import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import styles from './styles.module.css';
import webHero from '../../images/webHero.png'
import logo from '../../images/luneVista.png';
//import from '../../images/.png';
import cDesign from '../../images/coehesiveDesign.png';
import upTime from '../../images/uptime.png';
import responsiveDesign from '../../images/responsive.png';
import { NavBarWebSub } from '../NavBarWebSub/NavBarWebSub';




/*<div className={styles.centerX}>
                        <img src ={webHero}/>
                    </div>*/

export const Web = () => {

    return (
        <div className={styles.main}>
            <NavbarWeb />
            <NavBarWebSub/>


            <div className={styles.tile}>

                <div className={styles.container}>

                    <img src={webHero} className={styles.webHero}/>

                    <div className={styles.txtRow}>
                        <div className={styles.txt33}>
                            {`Say hello to your new home, on the `}

                        </div>
                        <div className={styles.txt33}>


                        </div>
                        <div className={styles.txt33Red}>
                            internet

                        </div>
                        <div className={styles.txt33}>
                            .

                        </div>
                    </div>



                </div>

            </div>


            <div className={styles.tile}>
                <div className={styles.container}>

                    <div className={styles.frame24}>
                        <div className={styles.proTitile}>
                            Professional Website Design and Developement
                        </div>
                        <div className={styles.group20}>
                            <div className={styles.by}>by</div>
                            <img src={logo} />

                        </div>


                    </div>
                    <img src={cDesign} className={styles.cDesign} />

                    <div className={styles.rainbowContainer}>
                        <div className={styles.rainbowTitle}
                        >Cohesive Design</div>
                        <div className={styles.rainbow}
                        >Fitting your Vibe</div>
                        <div className={styles.rainbowSubTxt}
                        >We focus on creating unique websites that are designed to integrate with and display your brand's vibe and feel. It’s very important for us to design a website that compliments and reflects the identity of the business or professional we are working with.</div>
                    </div>


                </div>

            </div>


            <div className={styles.tile}>
                <div className={styles.container}>

                    <div className={styles.rainbowContainerTL}>
                        <div className={styles.rainbowTitle}
                        >Fast and Reliable Access</div>
                        <div className={styles.rainbow2}
                        >Ready for Your Audience</div>
                        <div className={styles.rainbowSubTxt}
                        >Your website is always up and running thanks to our secure and reliable hosting</div>
                    </div>

                    <img src={upTime} />


                </div>

            </div>

            <div className={styles.tile}>
                <div className={styles.container}>
                <div className={styles.responsiveContainer}>

                    <div className={styles.rainbowContainerTR}>
                        <div className={styles.rightBox}>
                        <div className={styles.rainbowTitleB}
                        >Responsive CSS</div>
                        <div className={styles.rainbow2}
                        >Perfection on each Page</div>
                        <div className={styles.rainbowSubTxt}
                        >Functionally designed on all platforms to reach everyone, on any device.</div>
                    </div>
                    </div>
                    <div className={styles.rCont}>
                    <img src={responsiveDesign} style={{width: '100%'}} />
                    </div>
                    

                    </div>
                    

                </div>

            </div>

            <div className={styles.tile}>
                <div className={styles.container}>


                </div>

            </div>

            <div className={styles.tile}>
                <div className={styles.container}>


                </div>

            </div>


        </div>
    )
}