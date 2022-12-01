import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import { NavBarWebSub } from '../NavBarWebSub/NavBarWebSub';
import styles from './styles.module.css';




export const Plan = () => {
    const {id} = useParams();
    const [planType, setPlanType] = useState();

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

              </div>

              <div className={styles.tOne}>

              </div>


          </div>
        </div>
    )
}