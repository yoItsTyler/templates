import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import { NavBarWebSubWht } from '../NavBarWebSubWht/NavBarWebSubWht';
import styles from './styles.module.css';
import aA from '../../images/aA.png'
import aA2 from '../../images/aA2.png'
import aA3 from '../../images/aA3.png'
import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';


export const BrandingPlan = () => {
    const { id } = useParams();
    const {pathname} = useLocation();
    //const hist = createBrowserHistory();
    const [planType, setPlanType] = useState();
    const history = useHistory();
    const imgArray = { aA, aA2, aA3 };
    const prices = { pro: '$50.00 - $300.00', biz: '$600.00', ent: '$900.00' };
    const [curPrice, setCurPrice] = useState();
    const [img, setImg] = useState();

    const [windowDH, setWindowDH] = useState(null);

    const learnMore = () => {
       // history.push('/branding-plan/logo-design');
    //    console.log('after hist push onclick')
        //window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        console.log('after scroll')
        console.log('scroll Y',window.scroll(0));
    };

    useLayoutEffect(() => {

        window.scrollTo(0, 0);
        console.log('id', id, 'pathname', pathname );
        if('scrollRestoration' in history){
            history.scrollRestoration = 'manual';
        }
      }, [pathname]);


  
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
                    {planType}
                </div>
                <div className={styles.txtP}
                >Popular for businesses or professionals that are just starting out with a limited budget and just need somewhere to start. A logo is where your brand begins and how you are remembered. Request now for a free consultation so we can learn more about your needs and create a custom plan just for you.
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
                    {planType}
                </div>
                <div className={styles.txtP}
                >Geared more towards projects in need of advanced design features like logo, font, patterns, and other design-based assets. Get a customized identity design plan curated by the Lune Vista creative team. Get exactly what you are looking for by sitting down and expressing exactly the feel you want your brand representing and we will deliver that to you. Request now for a free consultation with us to learn more about your exact needs.
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
                  {planType} 
                </div>
                <div className={styles.txtP}
                >For large scale projects requiring a tailored solution with design. Get your customized logo and identity along with 1:1 support and a guide on how to use your design assets through your day to day operations. Request now for a free consultation with us to learn more about your exact needs.
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
                    <div className={styles.rBtn3} onClick={() => {history.push('/branding-plan/logo-design') }}
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
                    <div className={styles.rBtn3} onClick={() => {history.push('/branding-plan/identity-package') }}
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
                            <img className={styles.planImg} src={img} />
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
                        <div className={styles.footTitle}>{planType}</div>
                        <div className={styles.rowCont}>
                            <div className={styles.colCont}>
                                <div className={styles.start}>Starting at</div>
                                <div className={styles.price}>{curPrice}</div>
                            </div>

                            <div className={styles.rBtn2} onClick={() => {history.push(`/request/branding/${id}`)}}>Request Now</div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}