import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import { NavBarWebSub } from '../NavBarWebSub/NavBarWebSub';
import styles from './styles.module.css';
import proPlan from '../../images/proPlan.png';
import bixPlan from '../../images/bizPlan.png';
import enterprisePlan from '../../images/enterprisePlan.png';



export const Plan = () => {
    const { id } = useParams();
    const [planType, setPlanType] = useState();
    const history = useHistory();
    const imgArray = {proPlan, bixPlan, enterprisePlan};
    const prices = {pro: '$800.00', biz: '$1,500.00', ent: '$3,000.00'};
    const [curPrice, setCurPrice] = useState();
    const [img, setImg] = useState();



    const capitalizeFirst = id => {
        return id?.toString().charAt(0).toUpperCase() + id?.toString().slice(1);
    }

    useEffect(() => {
        if (id) {
            setPlanType(capitalizeFirst(id));
            if(id == 'professional'){
                setImg(imgArray.proPlan);
                setCurPrice(prices.pro);
            }
            if(id == 'business'){
                setImg(imgArray.bixPlan);
                setCurPrice(prices.biz);
            }
            if(id == 'enterprise'){
                setImg(imgArray.enterprisePlan);
                setCurPrice(prices.ent);
            }
        }


    }, [id]);




    const Pro = () => {

        return(
            <div className={styles.column}>

                            <div className={styles.planT}>
                                Website {planType} Plan
                            </div>
                            <div className={styles.txtP}
                            >Popular for portfolios or basic web pages for personal use and growing your brand getting it off the ground. Get on the internet with your own custom project designed and developed by the Spectiv Web team. After implementation, choose to have your project managed by Spectiv as well. Request now for a free consultation so we can learn more about your needs and create a custom plan just for you.
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

                            <div className={styles.subCont}>

                                <div className={styles.rBtn}>Request Free Consultation Now</div>

                            </div>
                        </div>

        )
    }

    const Biz = () => {

        return(
            <div className={styles.column}>

                            <div className={styles.planT}>
                                Website {planType} Plan
                            </div>
                            <div className={styles.txtP}
                            >Geared more towards projects in need of advanced web features like online payments, booking, and events. Get a customized plan designed and developed by the Spectiv Web team using advanced Application Program Interfaces. After implementation, choose to have your project managed by Spectiv as well. Request now for a free consultation for us to learn more about your exact needs.
                            </div>
                            <div className={styles.txt}
                            >  Custom Domain
                            </div>
                            <div className={styles.txt}
                            > Complex and unique design
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
                            <div className={styles.txt}
                            >  Advanced functionality
                            </div>

                            <div className={styles.subCont}>

                                <div className={styles.rBtn}>Request Free Consultation Now</div>

                            </div>
                        </div>

        )
    }
    const Ent = () => {

        return(
            <div className={styles.column}>

                            <div className={styles.planT}>
                                Website {planType} Plan
                            </div>
                            <div className={styles.txtP}
                            >For large scale projects requiring a tailored solution with advanced web applications. Get your customized web plan designed and developed by the Spectiv Web team with continued management by Spectiv after implementation. Request now for a free consultation for us to learn more about your exact needs.
                            </div>
                            <div className={styles.txt}
                            >  Custom Domain
                            </div>
                            <div className={styles.txt}
                            > Completely design
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
                            <div className={styles.txt}
                            >  Advanced functionality
                            </div>

                            <div className={styles.subCont}>

                                <div className={styles.rBtn}>Request Free Consultation Now</div>

                            </div>
                        </div>

        )
    }

    const Plan = () => {
        if (id) {
           // setPlanType(capitalizeFirst(id));
            if(id == 'professional'){
               return <Pro/>;
            }
            if(id == 'business'){
                return <Biz/>;
            }
            if(id == 'enterprise'){
                return <Ent/>;
            }
        }
        
    }

    const BCard = () => {
        return(
            <div className={styles.column}>
                <img src={bixPlan}/>
                <div className={styles.cardT}>Business Plan</div>

                <div className={styles.colCont}>
                <div className={styles.start}>Starting at</div>
                        <div className={styles.price}>{curPrice}</div>
                        <div className={styles.rBtn3}>Learn More</div>
                        </div>
                        
                        </div>

        )
    }
    const ECard = () => {
        return(
            <div className={styles.column}>
                <img src={enterprisePlan}/>
                <div>Enterprise Plan</div>
                        
                        </div>

        )
    }


    return (
        <div className={styles.main}>
            <NavbarWeb />
            <NavBarWebSub />
            <div className={styles.page}>

                <div className={styles.tOne}>

                    <div className={styles.splitRow2}>
                        <div className={styles.column}>
                            <img src={img} />
                            <div className={styles.subTxt}
                                onClick={() => { history.push('/web-plans') }}
                            >
                                Compare all Website pricing plans
                            </div>
                        </div>

                        <Plan/>
                        
                    </div>

                </div>

                <div className={styles.tOne}>

                    <div className={styles.planT2}>Compare Website Plans</div>
                    <div className={styles.splitRow2}>
                        <BCard/> 
                        <ECard/>
                        
                    </div>

                </div>
                <div className={styles.tOne}>

                </div>


                <div className={styles.stickFooter}>
                    <div className={styles.footRow}>
                <div className={styles.footTitle}>{planType} Plan</div>
                <div className={styles.rowCont}>
                    <div className={styles.colCont}>
                <div className={styles.start}>Starting at</div>
                        <div className={styles.price}>{curPrice}</div>
                        </div>

                        <div className={styles.rBtn2}>Request Free Consultation Now</div>
                        </div>

                </div>
                </div>


            </div>
        </div>
    )
}