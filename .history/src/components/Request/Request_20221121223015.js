import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.css';


export const Request = () => {
    const { id } = useParams();

    const Calendy = ({ minWidth, height, url}) => {
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
            style ={{ minWidth: '320px', height}}/>
        );
    };



    return (
        <div className={styles.main}>
            <div>



                <Calendy/>
            </div>
        </div>
    )
}