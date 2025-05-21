//import { Appointments, Scheduler, ViewState, WeekView } from "@devexpress/dx-react-scheduler";
import { Icon } from "@material-ui/core";
import { Cancel, Check, CheckBoxOutlineBlank, Close, Undo, SwapHoriz } from "@mui/icons-material";
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
    const [swapRequestOpen, setSwapRequestOpen] = useState(false);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [availableSlots, setAvailableSlots] = useState([]);

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

    // Function to handle initiating a swap request
    const handleSwapRequest = (lesson) => {
        // Find available slots for swapping (empty slots or other students' slots)
        const availableSlots = Object.entries(schedule)
            .filter(([id, slot]) => {
                // Include empty slots and other students' slots on any day
                return !slot.studentName || 
                       (slot.studentName && slot.studentName !== lesson.studentName);
            })
            .map(([id, slot]) => ({
                id,
                ...slot
            }));
        
        setAvailableSlots(availableSlots);
        setSelectedLesson(lesson);
        setSwapRequestOpen(true);
    };

    // Function to handle confirming a swap
    const handleSwapConfirm = async (targetSlot) => {
        if (!selectedLesson || !targetSlot) return;

        const updatedSchedule = { ...schedule };
        const selectedId = selectedLesson.id;
        const targetId = targetSlot.id;

        // Store the swap in history
        const swapRecord = {
            date: new Date().toISOString(),
            originalSlot: {
                time: selectedLesson.startTime,
                day: selectedLesson.dayOfWeek
            },
            newSlot: {
                time: targetSlot.startTime,
                day: targetSlot.dayOfWeek
            }
        };

        // If target slot is empty
        if (!targetSlot.studentName) {
            updatedSchedule[targetId] = {
                ...targetSlot,
                studentName: selectedLesson.studentName,
                studentId: selectedLesson.studentId,
                parentId: selectedLesson.parentId,
                swapHistory: [...(targetSlot.swapHistory || []), swapRecord]
            };

            updatedSchedule[selectedId] = {
                ...selectedLesson,
                studentName: '',
                studentId: '',
                parentId: '',
                swapHistory: [...(selectedLesson.swapHistory || []), swapRecord]
            };
        } else {
            // If swapping with another student
            const tempStudent = {
                name: targetSlot.studentName,
                id: targetSlot.studentId,
                parentId: targetSlot.parentId
            };

            updatedSchedule[targetId] = {
                ...targetSlot,
                studentName: selectedLesson.studentName,
                studentId: selectedLesson.studentId,
                parentId: selectedLesson.parentId,
                swapHistory: [...(targetSlot.swapHistory || []), swapRecord]
            };

            updatedSchedule[selectedId] = {
                ...selectedLesson,
                studentName: tempStudent.name,
                studentId: tempStudent.id,
                parentId: tempStudent.parentId,
                swapHistory: [...(selectedLesson.swapHistory || []), swapRecord]
            };
        }

        // Update Firestore
        try {
            await fb.firestore.collection('schedules').doc(authUser.uid)
                .update(updatedSchedule);
            setSchedule(updatedSchedule);
            setSwapRequestOpen(false);
            setSelectedLesson(null);
        } catch (error) {
            console.error('Error updating schedule:', error);
        }
    };

    // Component to display swap options
    const SwapRequestModal = () => {
        return (
            <div className={styles.popBackground}>
                <div className={styles.popCont}>
                    <div className={styles.closeCont}>
                        <Icon><Close onClick={() => setSwapRequestOpen(false)} className={styles.closeSocialPop} /></Icon>
                    </div>
                    <div className={styles.popTxt}>
                        Select a time slot to swap with:
                    </div>
                    <div className={styles.swapSlotsList}>
                        {availableSlots.map((slot) => (
                            <div 
                                key={slot.id}
                                className={styles.swapSlotItem}
                                onClick={() => handleSwapConfirm(slot)}
                            >
                                {slot.dayOfWeek} {slot.startTime} - {slot.endTime}
                                {slot.studentName ? ` (${slot.studentName})` : ' (Empty Slot)'}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

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
                                            <div className={styles.lessonControls}>
                                                {!isAdmin && authUser.uid === lesson.parentId && lesson.notGoing === false ? (
                                                    <>
                                                        <div
                                                            className={styles.uBtn}
                                                            onClick={() => {
                                                                setUnavailableOpen(true);
                                                                setCurrentSelection(lesson);
                                                            }}
                                                        >
                                                            <Icon>
                                                                <Cancel style={{ color: "#2C2C2E" }} />
                                                            </Icon>
                                                        </div>
                                                        <div
                                                            className={styles.swapBtn}
                                                            onClick={() => handleSwapRequest(lesson)}
                                                        >
                                                            <Icon>
                                                                <SwapHoriz style={{ color: "#2C2C2E" }} />
                                                            </Icon>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <div 
                                                        className={styles.aBtn}
                                                        onClick={() => {
                                                            setAvailableOpen(true);
                                                            setCurrentSelection(lesson);
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
            {swapRequestOpen && <SwapRequestModal />}
        </div>
    )
}


