import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styles from './styles.module.css';
import proPlan from '../../images/proPlan.png';
import bixPlan from '../../images/bizPlan.png';
import enterprisePlan from '../../images/enterprisePlan.png';
import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import { NavBarWebSubWht } from '../NavBarWebSubWht/NavBarWebSubWht';
import bPlan from '../../images/bizPlan.png';


export const Request = () => {
    const { id, s } = useParams();
    const imgArray = { proPlan, bixPlan, enterprisePlan };
    const prices = { pro: '$800.00', biz: '$1,500.00', ent: '$3,000.00' };
    const [curPrice, setCurPrice] = useState();
    const [img, setImg] = useState();
  const history = useHistory();
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
    const capitalizeFirst = id => {
        return id?.toString().charAt(0).toUpperCase() + id?.toString().slice(1);
    }
    console.log('id => ', useParams());

  

    const [planType, setPlanType] = useState();

    useEffect(() => {
        if (id) {
            setPlanType(capitalizeFirst(id));
            if (id == 'professional') {
                setTitle('Professional Website Plan');
                setImg(imgArray.proPlan);
                setCurPrice(prices.pro);
            }
            if (id == 'business') {
                setTitle('Business Website Plan');
                setImg(imgArray.bixPlan);
                setCurPrice(prices.biz);
            }
            if (id == 'enterprise') {
                setTitle('Enterprise Website Plan');
                setImg(imgArray.enterprisePlan);
                setCurPrice(prices.ent);
            }
            if(id == 'branding') {
                if()


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
            style ={{ minWidth: '320px', height:'1100px', minHeight:'maxContent', overflowY:'visible', marginTop:'20px'}}/>
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
                <NavBarWebSubWht/>
                <div className={styles.box}>


                <div className={styles.title}>{title}</div>
                <img src={img} className={styles.img}/>

                <div className={styles.rNow}>
                    Request Free Consultation
                </div>


                <div className={styles.calendy}>
                <Calendy className={styles.Calendy}
                 />
                </div>
                



                </div>
           
                
                
            
        </div>
    )
}