import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import { NavBarBrandingSub } from '../NavBarBrandingSub/NavBarBrandingSub';
import styles from './styles.module.css';
import chat from '../../images/chat.png';
import { useHistory } from 'react-router-dom';
//import chat from '../../images/.png';
import aA from '../../images/aA.png';
import aA2 from '../../images/aA2.png';
import aA3 from '../../images/aA3.png';
import aAglance from '../../images/aAglance.png';
import lineGlance from '../../images/lineGlance.png';
import checklist from '../../images/checklist.png';
import logoB from '../../images/logoB.png';
import behindBranding from '../../images/behindBranding.png';
import promote from '../../images/promote.png';
import onTheWeb from '../../images/onTheWeb.png';

export const BrandingPlans = () => {
    const history = useHistory();


    return (
        <div className={styles.main}>
            <NavbarWeb />
            <NavBarBrandingSub />
            <div className={styles.page}>

                <div className={styles.title}>
                    Request Lune Vista Logo & Branding
                </div>
                <img src={chat} className={styles.chat} />

                <div className={styles.txtCont}>
                    <div className={styles.txt}>
                        Have questions about requesting Design solutions?
                    </div>
                    <div className={styles.subTxt} onClick={() => {history.push('/request/')}}>
                        Chat with us Now
                    </div>
                </div>


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
                        <div className={styles.rBtn} onClick={() => {history.push('/request/professional')}}>Request Now</div>
                        <div className={styles.lBtn} onClick={() => {history.push('/plan/professional')}}
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
                        >  Custom logo
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
                        <div className={styles.rBtn} onClick={() => {history.push('/request/business')}}>Request Now</div>
                        <div className={styles.lBtn} onClick={() => {history.push('/plan/business')}}
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
                        >  Custom logo desing
                        </div>
                        <div className={styles.txt}
                        > Identity package
                        </div>
                        <div className={styles.txt}
                        > Brnading use guide
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
                        <div className={styles.rBtn} onClick={() => {history.push('/request/enterprise')}}>Request Now</div>
                        <div className={styles.lBtn} onClick={() => {history.push('/plan/enterprise')}}
                        >Learn More</div>
                        </div>
                    </div>


                </div>




                <div className={styles.title}>
                    A closer look at Lune Vista Design
                </div>

                <div className={styles.mediaContainer}>

                    <div className={styles.splitRow}>
                        <div className={styles.twoThirdBox}>
                        <div className={styles.imgC}>
                            <img src ={aAglance}  className ={styles.img}/>
                            </div>
                            <div className = {styles.txtRow}>
                                <div className={styles.boldTxt}><span className={styles.darkBoldTxt}>It all starts with You.</span> Lune Vista Design <br></br>has a plan for anyone to get stylish.</div>
                                <div className={styles.lightTxt}></div>
                            </div>
                        </div>
                        <div className={styles.oneThirdBox}>
                            <div className = {styles.txtRow}>
                                <div className={styles.boldTxt}><span className={styles.darkBoldTxt}>Brand Strategy.</span><br></br> Overcome challenges and meet goals with design.</div>
                                <div className={styles.lightTxt}></div>
                            </div>
                            <div className={styles.imgC}>
                            <img src ={checklist} className={styles.img}/>
                            </div>
                        </div>

                    </div>


                    <div className={styles.splitRow}>

                    <div className={styles.oneThirdBox}>
                            <div className={styles.imgC}>
                            <img src ={logoB} className={styles.img}/>
                            </div>
                            <div className = {styles.txtRow}>
                                <div className={styles.boldTxtLeft}><span className={styles.darkBoldTxt}>Cohesive Design.</span><br></br>Integrate with your <br></br>style, vibe, and vision.</div>
                                <div className={styles.lightTxt}></div>
                            </div>
                        </div>
                        
                        <div className={styles.twoThirdBox}>
                        
                            <div className = {styles.txtRow4}>
                                <div className={styles.boldTxtLeft}><span className={styles.darkBoldTxt}>Influence perspective.</span><br></br>Promote instant recognition. <br></br>Timeless designs that grow <br></br>with your business.</div>
                                <div className={styles.lightTxt}></div>
                            </div>
                            <div className={styles.imgC}>
                            <img src ={lineGlance}  className ={styles.img4}/>
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
                <div className={styles.purpleBox} style={{backgroundImage: 'url(' + behindBranding  + ')', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className={styles.lTxtCont}>
                        <div className={styles.wTxt}>Logo & Branding</div>
                        <div className={styles.sTxt}>See what's behind Luna Vista Design</div>
                        <div className={styles.lTxt} onClick={() => history.push('/branding')}>Learn More</div>
                    </div>
                 

                </div>

                <div className={styles.splitRow2}>

                <div className={styles.identityBox} style={{backgroundImage: 'url(' + onTheWeb  + ')', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className={styles.lTxtCont}>
                        <div className={styles.wTxt}>Online</div>
                        <div className={styles.sTxt}>Put Yourself <br></br>on the Web</div>
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