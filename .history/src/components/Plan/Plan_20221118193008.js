import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import { NavBarWebSub } from '../NavBarWebSub/NavBarWebSub';
import styles from './styles.module.css';
import proPlan from '../../images/proPlan.png';



export const Plan = () => {
    const {id} = useParams();
    const [planType, setPlanType] = useState();
    const history = useHistory();

    const capitalizeFirst = id => {
        return id?.toString().charAt(0).toUpperCase() + id?.toString().slice(1);
    }

    useEffect(()=> {
        if(id){
            setPlanType(capitalizeFirst(id));
        }  

    },[id]);


    return(
        <div className={styles.main}>
          <NavbarWeb/>
          <NavBarWebSub/>
          <div className={styles.page}>

              <div className={styles.tOne}>
                 <div></div>

                 <div className={styles.column}>
                        <img src={proPlan} />
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
                        <div className={styles.rBtn}>Request Now</div>
                        <div className={styles.lBtn} onClick={() => {history.push('/plan/professional')}}
                        >Learn More</div>
                        </div>
                    </div>

              </div>

              <div className={styles.tOne}>

              </div>
              <div className={styles.tOne}>

              </div>


          </div>
        </div>
    )
}