import { useParams } from 'react-router-dom';
import styles from './styles.module.css';




export const Plan = () => {
    const {id} = useParams();




    return(
        <div className={styles.main}>
          {id}  Plan 
        </div>
    )
}