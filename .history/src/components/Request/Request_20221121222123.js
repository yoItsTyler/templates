import { useParams } from 'react-router-dom';
import styles from './styles.module.css';


export const Request = () => {
    const { id } = useParams();



    return (
        <div className={styles.main}>
            <div>

                <div className={styles.calendly} data-url="https://calendly.com/lunevista/consultation?primary_color=006add" style="min-width:320px;height:630px;"></div>
            

                Yo
            </div>
        </div>
    )
}