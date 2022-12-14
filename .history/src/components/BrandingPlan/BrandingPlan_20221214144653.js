import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import { NavBarWebSubWht } from '../NavBarWebSubWht/NavBarWebSubWht';
import styles from './styles.module.css';
import proPlan from '../../images/proPlan.png';
import bixPlan from '../../images/bizPlan.png';
import enterprisePlan from '../../images/enterprisePlan.png';
import aA from '../../images/aA.png'
import aA2 from '../../images/aA2.png'
import aA3 from '../../images/aA3.png'


export const BrandingPlan = () => {
    const { id } = useParams();
    const [planType, setPlanType] = useState();
    const history = useHistory();
    const imgArray = { aA, aA2, aA3 };
    const prices = { pro: '$50.00 - $300.00', biz: '$600.00', ent: '$900.00' };
    const [curPrice, setCurPrice] = useState();
    const [img, setImg] = useState();

    const [windowDH, setWindowDH] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        console.log('id', id, );
      }, [id]);


  
    useEffect(() => {
     // setWindowDW(window.innerWidth);
      setWindowDH(window.innerHeight);
    }, []);
    
    let vh = windowDH * 0.01;
    
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log('*initial VH was set in css as::', vh);
    


    const getHeight = () => window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

  function useCurrentHeight() {
    let [height, setHeight] = useState(getHeight());

    useEffect(() => {
      let timeoutId = null;
      const resizeListener = () => {

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => setHeight(getHeight(), 50));
      };
      window.addEventListener('resize', resizeListener, false);
      return () => {
        window.removeEventListener('resize', resizeListener, false);
      }
    }, [])
    console.log('resize function ran');
    return height;
  }

  let h = useCurrentHeight();
  console.log(h);



  useEffect(() => {
    let vh = h * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log('vh', vh, 'h:', h);
    setWindowDH(h);
    console.log('*after resize Listener VH was set in css as::', vh);

  }, [h]);


  console.log('windowDH', windowDH);





    const capitalizeFirst = id => {
        //return id?.toString().charAt(0).toUpperCase() + id?.toString().slice(1);
        return id.replace(/(^|\W)(\w)/g, (match, a, b) => a + b.toUpperCase()).replace('-', ' ');
    }

    useEffect(() => {
        if (id) {
            setPlanType(capitalizeFirst(id));
            if (id == 'logo-design') {
                setImg(aA);
                setCurPrice(prices.pro);
            }
            if (id == 'identity-package') {
                setImg(aA2);
                setCurPrice(prices.biz);
            }
            if (id == 'branding-strategy') {
                setImg(aA3);
                setCurPrice(prices.ent);
            }
        }


    }, [id]);

    const Logo = () => {

        return (
            <div className={styles.column}>

                <div className={styles.planT}>
                    {planType} Plan
                </div>
                <div className={styles.txtP}
                >Popular for portfolios or basic web pages for personal use and growing your brand getting it off the ground. Get on the internet with your own custom project designed and developed by the Spectiv Web team. After implementation, choose to have your project managed by Spectiv as well. Request now for a free consultation so we can learn more about your needs and create a custom plan just for you.
                </div>
                <div className={styles.txt}
                >  Custom Logo
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

                <div className={styles.subCont}>
                    <div className={styles.rBtn} onClick={() => {history.push(`/request/branding/${id}`)}}>Request Free Consultation Now</div>
                </div>
            </div>

        )
    }

    const Identity = () => {

        return (
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

                    <div className={styles.rBtn} onClick={()=> {history.push(`/request/branding/${id}`)}} >Request Free Consultation Now</div>

                </div>
            </div>

        )
    }
    const Strategy = () => {

        return (
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

                    <div className={styles.rBtn} onClick={()=> {history.push(`/request/branding/${id}`)}}>Request Free Consultation Now</div>

                </div>
            </div>

        )
    }

    const Plan = () => {
        if (id) {       
            if (id == 'logo-design') {
                return <Logo />;
            }
            if (id == 'identity-package') {
                return <Identity />;
            }
            if (id == 'branding-strategy') {
                return <Strategy />;
            }
        }

    }
    const LCard = () => {
        return (
            <div className={styles.column}>
                <img src={aA} className={styles.cImg}/>
                <div className={styles.cardT}>Logo Desing</div>

                <div className={styles.colCont}>
                    <div className={styles.start}>Starting at</div>
                    <div className={styles.price}>$50.00 - $300.00</div>
                    <div className={styles.rBtn3} onClick={() => {history.push('/branding-plan/logo-design')}}
                    >Learn More</div>
                </div>

            </div>

        )
    }

    const ICard = () => {
        return (
            <div className={styles.column}>
                <img src={aA2} className={styles.cImg}/>
                <div className={styles.cardT}>Identity Package</div>

                <div className={styles.colCont}>
                    <div className={styles.start}>Starting at</div>
                    <div className={styles.price}>$600.00</div>
                    <div className={styles.rBtn3} onClick={() => {history.push('/branding-plan/identity-package')}}
                    >Learn More</div>
                </div>

            </div>

        )
    }
    const BCard = () => {
        return (
            <div className={styles.column}>
                <img src={aA3} className={styles.cImg}/>
                <div className={styles.cardT}>Brand Strategy</div>

                <div className={styles.colCont}>
                    <div className={styles.start}>Starting at</div>
                    <div className={styles.price}>$900.00</div>
                    <div className={styles.rBtn3} onClick={() => {history.push('/branding-plan/branding-strategy')}}
                    >Learn More</div>
                </div>

            </div>

        )
    }

    const Compare = () => {

        if (id) {
            // setPlanType(capitalizeFirst(id));
            if (id == 'logo-design') {
                return(
                    <div className={styles.splitRow3}>
                        <ICard/>
                        <BCard/>
                    </div>
                );
            }
            if (id == 'identity-package') {
                return(
                    <div className={styles.splitRow3}>
                        <LCard/>
                        <BCard/>
                    </div>
                );
            }
            if (id == 'branding-strategy') {
                return(
                    <div className={styles.splitRow3}>
                        <LCard/>
                        <ICard/>
                    </div>
                );
            }
        }
    }


    return (
        <div className={styles.main}>
            <NavbarWeb />
            <NavBarWebSubWht />
            <div className={styles.page}>

                <div className={styles.tOne}>

                    <div className={styles.splitRow2}>
                        <div className={styles.column}>
                            <img src={img} />
                            <div className={styles.subTxt}
                                onClick={() => { history.push('/web-plans') }}
                            >
                                Compare all design pricing plans
                            </div>
                        </div>

                        <Plan />

                    </div>

                </div>

                <div className={styles.tOne}>

                    <div className={styles.planT2}>Compare Design Plans</div>
                    <div className={styles.splitRow3}>
                        <Compare/>
                    </div>

                </div>
                <div className={styles.tFoot}>
                <div className={styles.txtCont}>
                <div className={styles.txt2}>
                    Find out where we can help.

                </div>
                <div className={styles.subTxt2} onClick={() => history.push(`/request/branding/${id}`)}>
                    Request Free Consultation Now
                    
                </div>
            </div>

                </div>


                <div className={styles.stickFooter}>
                    <div className={styles.footRow}>
                        <div className={styles.footTitle}>{planType} Plan</div>
                        <div className={styles.rowCont}>
                            <div className={styles.colCont}>
                                <div className={styles.start}>Starting at</div>
                                <div className={styles.price}>{curPrice}</div>
                            </div>

                            <div className={styles.rBtn2} onClick={() => {history.push(`/request/branding/${id}`)}}>Request Free Consultation Now</div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}