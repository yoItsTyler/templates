import { useParams } from 'react-router-dom';
import styles from './styles.module.css';




export const Plan = () => {
    const {id} = useParams();


    const capitalizeFirst = id => {
        return id.charAt(0).toUpperCase() + id.slice(1);

    }

    console.log('cap first ', capitalizeFirst());




    return(
        <div className={styles.main}>
          {id}  Plan 
        </div>
    )
}