
import { Icon } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos, Close } from "@mui/icons-material";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks";
import { fb } from "../../service/firebase";
import { NavbarMobile } from "../NavbarMobile/NavbarMobile";
import { DailySchedule } from "./DailySchedule";
import styles from './styles.module.css';

export const ParentDash = () => {

    const auth = getAuth();
    const history = useHistory();
    const { authUser } = useAuth();
    const [schedule, setSchedule] = useState({});
    const [currentDate, setCurrentDate] = useState(new Date());
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
    
    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const docRef = fb.firestore.collection('schedules').doc('SgF2w4uiNhZMuQB3HMBeQJgvyfY2');
                const docSnap = await docRef.get();
                if (docSnap.exists) {
                    setSchedule(docSnap.data());
                } else {
                    console.log('no such document')
                }
            } catch (error) {
                console.error('error:', error)
            }
        }
        if (authUser) {
            fetchSchedule();
        }
    }, [authUser]);

    const handlePreviousDay = () => {
        const previousDay = new Date(currentDate);
        previousDay.setDate(previousDay.getDate() - 1);
        setCurrentDate(previousDay);
    };

    const handleNextDay = () => {
        const nextDay = new Date(currentDate);
        nextDay.setDate(nextDay.getDate() + 1);
        setCurrentDate(nextDay);
    };

    const Logout = () => {
        fb.auth.signOut().then(() => history.push('/'));
    }

    return (
        <div className={styles.main}>
            <NavbarMobile />
            <div className={styles.title}>Parent Dashboard</div>
            <div className={styles.scheduleCont}>
                <div className={styles.contWidth}>
                    <div className={styles.scheduleNav}>
                        <div onClick={handlePreviousDay}> <Icon className={styles.prevDay}><ArrowBackIos style={{ marginLeft: '8px' }} /></Icon>  </div>
                        <div className={styles.currentDay}>{currentDayOfWeek}</div>
                        <div className={styles.nextDay} onClick={handleNextDay}><Icon> <ArrowForwardIos /></Icon></div>
                    </div>
                    <DailySchedule schedule={schedule} currentDay={currentDayOfWeek} setSchedule={setSchedule} />
                </div>
            </div>
        </div>
    )
}