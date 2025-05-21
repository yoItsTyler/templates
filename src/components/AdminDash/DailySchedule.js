
//import { Appointments, Scheduler, ViewState, WeekView } from "@devexpress/dx-react-scheduler";
import { Icon } from "@material-ui/core";
import { Cancel, Check, CheckBoxOutlineBlank, Close, Undo } from "@mui/icons-material";
//import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
//import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState } from "react";
import { useAuth, useIsAdmin } from "../../hooks";
import { fb } from "../../service/firebase";
import styles from './styles.module.css';


export const DailySchedule = ({ schedule, currentDay, setSchedule }) => {
    const [lessonsForCurrentDay, setLessonsForCurrentDay] = useState({});
    const [appointments, setAppointments] = useState([]);
    const [value, setValue] = useState();
    const isAdmin = useIsAdmin();
    const { authUser } = useAuth()
    useEffect(() => {
        console.log('AUTHUSER', authUser)
    }, [authUser])

    const convertLessonsToAppointments = (lessons) => {
        // Create an array to store the appointments
        const appointments = [];

        // Loop through the lessons object and convert each lesson to an appointment
        Object.keys(lessons).forEach((lessonId) => {
            const lesson = lessons[lessonId];
            const start = new Date(`2023-01-01T${lesson.startTime}`);
            const end = new Date(`2023-01-01T${lesson.endTime}`);

            // You can add more fields to the appointment as needed
            const appointment = {
                id: lessonId,
                title: lesson.studentName,
                startDate: start,
                endDate: end,
            };

            appointments.push(appointment);
        });

        return appointments;
    };

    function parseTime(timeString) {
        const [rawTime, amPm] = timeString.split(' ');

        const [hour, minute, second] = rawTime.split(':');
        let parsedHour = parseInt(hour, 10);

        if (amPm === 'PM' && parsedHour !== 12) {
            parsedHour += 12;
        } else if (amPm === 'AM' && parsedHour === 12) {
            parsedHour = 0;
        }

        const parsedMinute = parseInt(minute, 10);
        const parsedSecond = parseInt(second, 10);

        const date = new Date();
        date.setHours(parsedHour, parsedMinute, parsedSecond, 0);

        return date.getTime(); // Return a comparable timestamp
    }

    const [changeMade, setChangeMade] = useState(1);

    useEffect(() => {
        // Filter and sort lessons for the current day whenever the schedule changes
        if (schedule) {
            console.log('Schedule! => ', schedule)
            const filteredAndSortedLessons = Object.entries(schedule)
                .filter(([key, lesson]) => lesson.dayOfWeek === currentDay) // Filter with the original keys
                .map(([key, lesson]) => ({ id: key, ...lesson })) // Attach the original key to each lesson
                .sort((a, b) => {
                    const timeA = parseTime(a.startTime); // Assuming you have a parseTime function
                    const timeB = parseTime(b.startTime); // Assuming you have a parseTime function

                    if (timeA < timeB) return -1;
                    if (timeA > timeB) return 1;
                    return 0;
                });

            setLessonsForCurrentDay(filteredAndSortedLessons);
            convertLessonsToAppointments(filteredAndSortedLessons);
        }
    }, [schedule, currentDay, changeMade]);





    useEffect(() => {
        console.log('current lessons', lessonsForCurrentDay)
    }, [lessonsForCurrentDay])
    useEffect(() => {
        console.log('current day', currentDay)
    }, [currentDay])


    /*
     {appointments &&
            <Scheduler data={appointments}>
                <ViewState currentDate={new Date()}/>
                <WeekView startDayHour={0} endDayHour={24} />
              
            </Scheduler>
            }
    */
   useEffect(() => {
    console.log('schedule when schedle is updated everytime', schedule)
   },[schedule])

    const [unavailableOpen, setUnavailableOpen] = useState(false);
    const [availableOpen, setAvailableOpen] = useState(false)
    const [currentSelection, setCurrentSelection] = useState()

    const confirmUnavailable = () => {
        const lessonId = currentSelection.id;
        const scheduleData = schedule;
        // Update the specific lesson field by merging the new data with the existing lesson data
        scheduleData[lessonId] = {
            ...scheduleData[lessonId], // Keep existing properties
            notGoing: true // Add new property
        };

        if (scheduleData) {
            fb.firestore.collection('schedules').doc('SgF2w4uiNhZMuQB3HMBeQJgvyfY2')
                .update(scheduleData)
                .catch(error => {
                    console.error('Error updating lesson:', error);
                });
        }
        setChangeMade(changeMade + 1);
        setSchedule(scheduleData);
        setCurrentSelection();
        setUnavailableOpen(false);
    }
    const confirmAvailable = () => {
        const lessonId = currentSelection.id;
        const scheduleData = schedule;
        // Update the specific lesson field by merging the new data with the existing lesson data
        scheduleData[lessonId] = {
            ...scheduleData[lessonId], // Keep existing properties
            notGoing: false // Add new property
        };
        
        if (scheduleData) {
            fb.firestore.collection('schedules').doc('SgF2w4uiNhZMuQB3HMBeQJgvyfY2')
                .update(scheduleData)
                .catch(error => {
                    console.error('Error updating lesson:', error);
                });
        }
        setChangeMade(changeMade + 1);
        setSchedule(scheduleData);
        setCurrentSelection();
        setAvailableOpen(false);
    }


    const SetUnavailable = () => {
        return (
            <div className={styles.popBackground}>
                <div className={styles.popCont}>
                    <div className={styles.closeCont}>  <Icon><Close
                        onClick={() => {
                            setUnavailableOpen(false);
                        }} className={styles.closeSocialPop} /></Icon>  </div>
                    <div className={styles.popTxt}>
                        Confirm below that you will be unavailable for this lesson
                    </div>
                    <div className={styles.whiteBtn} onClick={confirmUnavailable}
                    >Confirm</div>
                </div>
            </div>
        )
    }

    const SetAvailable = () => {
        return (
            <div className={styles.popBackground}>
                <div className={styles.popCont}>
                    <div className={styles.closeCont}>  <Icon><Close
                        onClick={() => {
                            setAvailableOpen(false);
                        }} className={styles.closeSocialPop} /></Icon>  </div>
                    <div className={styles.popTxt}>
                        Confirm below that you will be Available for this lesson
                    </div>
                    <div className={styles.whiteBtn} onClick={confirmAvailable}
                    >Confirm</div>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.DailySchedule}>

            <h1>Lessons for {currentDay}:</h1>
            {Object.keys(lessonsForCurrentDay).length > 0 ? (
                <div className={styles.schedContainer}>
                    {Object.keys(lessonsForCurrentDay).map(id => {
                        const lesson = lessonsForCurrentDay[id]; // Get the lesson object using the ID

                        return (
                            <div className={styles.eachLesson} key={id}>
                                <div className={styles.lesson}
                                    style={{ backgroundColor: lesson.notGoing ? '#FF2D55' : '#F0F0F0', color: lesson.notGoing ? '#F0F0F0' : '' }}
                                >
                                    <div className={styles.lessonInfo}>
                                        {lesson.startTime} - {lesson.endTime} | {lesson.studentName ? `Student: ${lesson.studentName}` : 'Available'}
                                    </div>
                                    <div>
                                        {authUser.uid === lesson.parentId &&
                                            <div>
                                                {!isAdmin && authUser.uid === lesson.parentId && lesson.notGoing === false ? (
                                                    <div
                                                        className={styles.uBtn}
                                                        onClick={() => {
                                                            setUnavailableOpen(true);
                                                            setCurrentSelection(lesson); // Pass an object with both lesson and id
                                                        }}
                                                    >
                                                        <Icon>
                                                            <Cancel style={{ color: "#2C2C2E" }} />
                                                        </Icon>
                                                    </div>
                                                ) : (
                                                    <div 
                                                    className={styles.aBtn}
                                                    onClick={()=> {
                                                        setAvailableOpen(true)
                                                        setCurrentSelection(lesson)
                                                    }}
                                                    >
                                                        <Icon color="#F0F0F0">
                                                            <Undo style={{ color: "#F0F0F0" }} />
                                                        </Icon>
                                                    </div>
                                                )}
                                            </div>
                                        }
                                        {!isAdmin && !lesson.studentName && 
                                         <div
                                         className={styles.sBtn}
                                         onClick={() => {
                                             
                                         }}
                                     >
                                         <Icon>
                                             <CheckBoxOutlineBlank style={{ color: "#2C2C2E" }} />
                                         </Icon>
                                     </div>
                                        }
                                    </div>
                                </div>
                                <div className={styles.blackKeys}></div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <p>No lessons for the current day.</p>
            )}
            {unavailableOpen && <SetUnavailable />}
            {availableOpen && <SetAvailable/>}
        </div>
    )
}


