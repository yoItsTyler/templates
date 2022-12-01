import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.css';




export const Plan = () => {
    const {id} = useParams();


    const capitalizeFirst = id => {
        return id?.toString().charAt(0).toUpperCase() + id?.toString().slice(1);

    }

    

    useEffect(()=> {
        if(id){
            console.log('cap first ', capitalizeFirst(), 'id', id);

        }
        

    },[id]);


    return(
        <div className={styles.main}>
          {id}  Plan 
        </div>
    )
}