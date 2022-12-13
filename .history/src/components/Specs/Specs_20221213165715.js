import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import { NavBarWebSubWht } from '../NavBarWebSubWht/NavBarWebSubWht';
import styles from './styles.module.css';
import deskT from '../../images/Group 13spec.png';
import f57 from '../../images/Frame 57.png';
import f58 from '../../images/Frame 58.png';
import f59 from '../../images/Frame 59.png';
import f60 from '../../images/Frame 60.png';
import f61 from '../../images/Frame 61.png';
import f62 from '../../images/Frame 62.png';
import f63 from '../../images/Frame 63.png';
import f64 from '../../images/Frame 64.png';
import f65 from '../../images/Frame 65.png';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';


/*<div className={styles.iconCont}>
 </div>

*/

export const Specs = () => {
    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);


    return(
        <div className={styles.main}>
            <NavbarWeb/>
            <NavBarWebSubWht/>

            <div className={styles.page}>
                <div className={styles.specCont}>
            <div className={styles.specsT}>Specs</div>
            <img src={deskT} className ={styles.deskT}/>
            </div>

            <div className={styles.line}></div>

            <div className={styles.glance}>At a Glance</div>

            <div className={styles.container}>
                
                    <img className={styles.iconCont} src={f57}/>
                    <img className={styles.iconCont} src={f58}/>
                    <img className={styles.iconCont} src={f59}/>
                    
                    <img className={styles.iconCont} src={f62}/>
                    <img className={styles.iconCont} src={f61}/>
                    <img className={styles.iconCont} src={f60}/>
                    
                    <img className={styles.iconCont} src={f63}/>
                    <img className={styles.iconCont} src={f64}/>
                    <img className={styles.iconCont} src={f65}/>             

            </div>

            <div className={styles.txtCont}>
                <div className={styles.txt}>
                    Which Website plan is right for you?

                </div>
                <div className={styles.subTxt} onClick={() => history.push('/web-plans')}>
                    Compare all Website pricing pans

                </div>
            </div>
            <div className={styles.txtCont}>
                <div className={styles.txt}>
                    Find out where we can help.

                </div>
                <div className={styles.subTxt}>
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
    )
}