import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import styles from './styles.module.css';
import { useHistory } from 'react-router-dom';
import aboutMap from '../../images/aboutMap.png';
import twitter from '../../images/twitter.png';
import instagram from '../../images/instagram.png';
import facebook from '../../images/facebook.png';
import { useEffect } from 'react';

export const About = () => { 
    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);


    return ( 
        <div className={styles.main}>
            <NavbarWeb/>
            <div className={styles.page}>

                <div className={styles.tile1}>
                    <div className={styles.container}>
                        <div className={styles.title}>About</div>
                        <div className={styles.subTitle}>We make businesses grow through the power of creative thinking.</div>
                        <div className={styles.body}>Lune Vista Creative Agency was founded by Quinn Fessler and Tyler Samuelson, both majored in Computer Information Systems at the University of Louisville. They created Lune Vista after realizing how many local businesses were not connecting with their audience to their full potential. We grow successful businesses in Louisville and throughout the rest of the United States with the power of creative thinking. At Lune Vista, we specialize in helping launch start-ups and reviving existing businesses by creating unique and innovative content with a business needs perspective. Our focus is to help manage your online presence, allowing you to focus more on your day-to-day operations. With a relevant connection to the consumers and technology of today, we can change the way you influence your audience. We are consistently striving to expand our creative network so we can keep leveraging our unique competitive advantage.
                                                    <br></br>
                                                    <br></br>
                                                    If you want to overcome challenges and meet your goals contact us for a free business audit and learn where we can help you improve.</div>
                        <div className={styles.btn} onClick={() => history.push('/contact')}
                        >Contact Us</div>
                        <div className={styles.socialContainer}>
                            <img src={twitter} className={styles.social} />
                            <img src={instagram} className={styles.social} />
                            <img src={facebook} className={styles.social} />
                        </div>
                    </div>
                </div>

                <div className={styles.tile2}>
                    <img src={aboutMap} className={styles.mapPic} />
                </div>


            </div>
        </div>
    )
}