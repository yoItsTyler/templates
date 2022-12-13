import { NavbarWeb } from '../NavbarWeb/NavbarWeb';
import styles from './styles.module.css';
import { useHistory } from 'react-router-dom';
import contactPic from '../../images/contactPic.png';
import chatWht from '../../images/chatWht.png';
import { useEffect } from 'react';



export const Contact = () => { 
    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    const Calendy = ({ minWidth, minHeight, url}) => {
        useEffect(() => {
            window.scrollTo(0, 0)
          }, []);
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


    return ( 
        <div className={styles.main}>
            <NavbarWeb />
            <div className={styles.page}>

                <div className={styles.tile1} style={{backgroundImage: 'url(' + contactPic  + ')', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className={styles.container}>
                        <div className={styles.title}>Contact Us</div>
                        <img src={chatWht} className={styles.chat} />
                        <div className={styles.whtTxt}>Want to reach out to us?</div>
                        <div className={styles.blueTxt}>Chat with us Now</div>
                    </div>
                </div>
                <div className={styles.calendy}>
                <Calendy className={styles.Calendy}
                 />
                </div>

                


            </div>
        </div>
    )
}