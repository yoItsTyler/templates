import { useParams } from 'react-router-dom';
import styles from './styles.module.css';


export const Request = () => {
    const { id } = useParams();



    return (
        <div className={styles.main}>
            <div>



                Yo
            </div>
        </div>
    )
}