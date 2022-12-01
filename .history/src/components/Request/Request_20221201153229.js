import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styles from './styles.module.css';
import proPlan from '../../images/proPlan.png';
import bixPlan from '../../images/bizPlan.png';
import enterprisePlan from '../../images/enterprisePlan.png';
import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import { NavBarWebSub } from '../NavBarWebSub/NavBarWebSub';


export const Request = () => {
    const { id } = useParams();
    const imgArray = { proPlan, bixPlan, enterprisePlan };
    const prices = { pro: '$800.00', biz: '$1,500.00', ent: '$3,000.00' };
    const [curPrice, setCurPrice] = useState();
    const [img, setImg] = useState();
  const history = useHistory();
    const capitalizeFirst = id => {
        return id?.toString().charAt(0).toUpperCase() + id?.toString().slice(1);
    }

  

    const [planType, setPlanType] = useState();

    useEffect(() => {
        if (id) {
            setPlanType(capitalizeFirst(id));
            if (id == 'professional') {
                setImg(imgArray.proPlan);
                setCurPrice(prices.pro);
            }
            if (id == 'business') {
                setImg(imgArray.bixPlan);
                setCurPrice(prices.biz);
            }
            if (id == 'enterprise') {
                setImg(imgArray.enterprisePlan);
                setCurPrice(prices.ent);
            }
        }


    }, [id]);
    

    const Calendy = ({ minWidth, minHeight, url}) => {
        useEffect(() => {
            const head = document.querySelector('head'); 
            const script = document.createElement('script');
            script.setAttribute(
                'src',
                'https://assets.calendly.com/assets/external/widget.js'
            );
            head.appendChild(script);
        },[]);

        return(
            <div className='calendly-inline-widget'
            data-url='https://calendly.com/lunevista/consultation?primary_color=006add'
            style ={{ minWidth: '320px', height:'100vh', minHeight:'minContent'}}/>
        );
    };

    const Card = () => {
        return (
            <div className={styles.column}>
                <img src={bixPlan} />
                <div className={styles.cardT}>Business Plan</div>

                <div className={styles.colCont}>
                    <div className={styles.start}>Starting at</div>
                    <div className={styles.price}>$1,200.00</div>
                    <div className={styles.rBtn3} onClick={() => {history.push('/plan/business')}}
                    >Learn More</div>
                </div>

            </div>

        )
    }



    return (
        <div className={styles.main}>
            <NavbarWeb/>
                <NavBarWebSub/>
                <div className={styles.box}>


                <div className={styles.title}>Website Development</div>

                <div className={styles.rNow}>
                    Request Free Consultation
                </div>


                <div className={styles.calendy}>
                <Calendy/>
                </div>
                



                </div>
           
                
                
            
        </div>
    )
}