import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import styles from './styles.module.css';
import webHero from '../../images/webHero.png'
import logo from '../../images/luneVista.png';
//import from '../../images/.png';
import cDesign from '../../images/coehesiveDesign.png';




/*<div className={styles.centerX}>
                        <img src ={webHero}/>
                    </div>*/

export const Web = () => {

    return (
        <div className={styles.main}>
            <NavbarWeb />
            

            <div className={styles.tile}>

                <div className={styles.container}>
                 
                        <img src ={webHero}/>

                        <div className={styles.txtRow}>
                            <div className={styles.txt33}>
                               { `Say hello to your new home, on the `} 

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

                    <div className={styles.offsetContainer}>
                        <div className={styles.txt33400}>
                            Professional Website Design and Developement
                        </div>
                        <img src = {logo} className={styles.right0}/>
                       
                    </div>
                    <img src = {cDesign} className={styles.cDesign2}/>


                </div>

            </div>


            <div className={styles.tile}>
                <div className={styles.container}>


                </div>

            </div>


        </div>
    )
}