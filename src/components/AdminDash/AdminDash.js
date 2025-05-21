
//import DateFnsUtils from '@date-io/date-fns/build/date-fns-utils';
//import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Icon } from '@material-ui/core';
import { TimePicker } from '@material-ui/pickers';
import { mdiClose } from '@mdi/js';
import { ArrowBackIos, ArrowForwardIos, Close } from '@mui/icons-material';
import { Autocomplete, Button, Chip, getDialogContentTextUtilityClass, MenuItem, Select, Stack, TextField } from '@mui/material';

import { DateCalendar, LocalizationProvider, MultiSectionDigitalClock, StaticTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { getDate } from 'date-fns';
import dayjs from 'dayjs';
import { getFunctions, httpsCallable } from 'firebase/functions'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { fb } from '../../service/firebase';
import { uuid, uuid4 } from '../../shared/helpers';
import { useStudents } from '../AdminStudents/useStudents';
import { NavbarMobile } from '../NavbarMobile/NavbarMobile';
import { DailySchedule } from './DailySchedule';
import styles from './styles.module.css';
//import { DateCalendar } from '@material-ui/pickers';

export const AdminDash = () => {
    const { authUser } = useAuth();
    const studentNames = [
        { name: "Lacey Quinton" },
        { name: "Emma Quinton" },
        { name: "Karen Fuller" },
        { name: "Mara Passmore" },
        { name: "Chloe Gerber" },
        { name: "Pierson Becker" },
        { name: "Roy Zhang" },
        { name: "Hazel Lannon" },
        { name: "Isabella Sims" },
        { name: "Hudson Tucker" },
        { name: "London Mitchell" },
        { name: "Mason Mitchell" },
        { name: "Annika Bell" },
        { name: "Catheron Hoppe" },
        { name: "Sutton Thomas" },
        { name: "Clark Brooks" },
        { name: "Grace Eldridge" },
        { name: "Tessa Coke" },
        { name: "Alex Coke" },
        { name: "Hunter Kepley" },
        { name: "Brooks Kepley" },
        { name: "Stella O'Dowd" },
        { name: "Josalyn Dunlap" },
        { name: "Allie O'Dowd" },
        { name: "Arthur Murtland" },
        { name: "Josie Boyd" },
        { name: "Janie Boyd" },
        { name: "Henry Downs" },
        { name: "Georgia Downs" },
        { name: "Ali Keramzieva" },
        { name: "Jace Boyd" },
        { name: "Adalyn Smith" },
        { name: "Peyton Seelow" },
        { name: "Laurissa Wiles" },
        { name: "Lincoln Krezmien" },
        { name: "Kate Milby" },
        { name: "Mara" },
        { name: "Laurissa" },
        { name: "Lincoln" },
        { name: "Hudson" },
        { name: "Annika" },
        { name: "Adalyn" },
    ];
    const [currentStudent, setCurrentStudent] = useState('')
    const [timePickerOpen, setTimePickerOpen] = useState(false);
    const [timeSelected, setTimeSelected] = useState();
    const [selectedDate, handleDateChange] = useState(new Date());

    const [schedule, setSchedule] = useState({});
    const functions = getFunctions();

    const students = useStudents();

    useEffect(() => {
        if (students) {
            console.log('admin dash students', students)
        }
    }, [students])

    useEffect(() => {

        const fetchSchedule = async () => {
            try {
                const docRef = fb.firestore.collection('schedules').doc(authUser.uid);
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
            fetchSchedule()

        }

    }, [authUser])

    useEffect(() => {
        console.log('Schedule', schedule)
        console.log('Auth User', authUser)
    }, [schedule])

    const history = useHistory();
    useEffect(() => {
        console.log('timeSelected =>', timeSelected)
    }, [timeSelected])

    const Logout = () => {
        fb.auth.signOut().then(() => history.push('/'));
    }
    ////////////////////////////scheduling
    const [currentDate, setCurrentDate] = useState(new Date());

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

    function parseTime(timeObj) {
        const date = new Date(timeObj["$d"]);
        const timeString = date.toLocaleTimeString("en", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            // timeZone: "GMT-0400",
        });
        return timeString;
    }



    const [studentObj, setStudentObj] = useState();

    const AddLesson = () => {
        const [startTime, setStartTime] = useState();
        const [endTime, setEndTime] = useState();


        useEffect(() => {
            console.log('start time', startTime, 'end time', endTime);

        }, [startTime, endTime]);

        const handleStudentChange = (event, newValue) => {
            setCurrentStudent(newValue)
            const selectedStudent = Object?.entries(students)?.find(([studentId, student]) => student.studentName === newValue);

            console.log('current student obj', selectedStudent)
            console.log('current student obj', selectedStudent)
            if (selectedStudent) {
                setStudentObj(selectedStudent);
            }




        }



        const handleSaveLesson = () => {
            console.log('logstudentOBJ =>', studentObj);
            const newLesson = {
                startTime: parseTime(startTime),
                endTime: parseTime(endTime),
                dayOfWeek: currentDayOfWeek,
                studentName: currentStudent,
                notGoing: false,
                // ...(studentObj && {parentId: studentObj[1]?.parentId}),                
                //...(studentObj && {studentId: studentObj[0]}),
                ...(studentObj ? { parentId: studentObj[1]?.parentId, studentId: studentObj[0] } : { parentId: '', studentId: '' }),

            }
            const addLessonToSchedule = (newLesson) => {
                setSchedule((prevSchedule) => ({
                    ...prevSchedule,
                    // [`lesson${Object.keys(prevSchedule).length + 1}`]: newLesson,
                    [`${uuid()}`]: newLesson,
                }));
            };

            addLessonToSchedule(newLesson);
            setCurrentStudent('');
            setStudentObj('');
            setStartTime(undefined);
            setEndTime(undefined);
            setTimePickerOpen(false);


        }

        useEffect(() => {
            console.log('current Student', currentStudent)
        }, [currentStudent])




        return (
            <div className={styles.popBackground2}>
                <div className={styles.popCont2}>
                    <div className={styles.closeCont}>  <Icon  ><Close onClick={() => { setTimePickerOpen(false) }} className={styles.closeSocialPop} /></Icon>  </div>
                    <div className={styles.timePickerDay}>{currentDayOfWeek}</div>
                    <Stack sx={{ width: 300, margin: '6px' }}>
                        <Autocomplete

                            disableClearable
                            id="students"
                            freeSolo
                            value={currentStudent}
                            options={Object.values(students).map((selection) => selection.studentName)}
                            // getOptionLabel={(option) => option || ''}

                            onChange={handleStudentChange}
                            renderInput={(params) => (
                                <TextField {...params} label="Select Student" variant="outlined" />
                            )}
                        >

                        </Autocomplete>
                    </Stack>

                    <div className={styles.timeCont}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <div className={styles.timeTitle}>Lesson Start Time</div>
                            <MultiSectionDigitalClock className={styles.timePicker}
                                // value={}
                                onChange={(newValue) => { setStartTime(newValue) }}
                            />
                        </LocalizationProvider>
                    </div>

                    <div className={styles.timeCont}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <div className={styles.timeTitle}>Lesson End Time</div>
                            <MultiSectionDigitalClock className={styles.timePicker}
                                // value={}
                                onChange={(newValue) => { setEndTime(newValue) }}
                            />
                        </LocalizationProvider>
                    </div>

                    <button
                        onClick={handleSaveLesson}
                        className={styles.saveBtn}
                        disabled={!startTime || !endTime}
                    >
                        Save Lesson
                    </button>


                </div>
            </div >
        )
    }


    const saveSchedule = () => {//saving schedule changes to firestore fired by onClick
        if (authUser) {




            fb.firestore.collection('schedules').doc(authUser?.uid)
                .update(
                    schedule
                )
                .then((docRef) => {
                    console.log('Schedule added to Firestore');
                })
                .catch((error) => {
                    console.error('Error adding schedule to Firestore: ', error.code);
                    if (error.code === 'not-found') {
                        fb.firestore.collection('schedules').doc(authUser?.uid)
                            .set(
                                schedule
                            )
                            .then((docRef) => {
                                console.log('Schedule added to Firestore');
                            })

                    }
                });

        }

    }

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayOfWeek = daysOfWeek[currentDate.getDay()];

    /* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                />
            </LocalizationProvider>*/

    return (
        <div className={styles.main}>

            <NavbarMobile/>
            {timePickerOpen &&

                <AddLesson />

            }

            <div className={styles.title}>Admin Dash</div>

            <div onClick={saveSchedule} className={styles.whiteBtn}>Save Schedule</div>



            <div className={styles.scheduleCont}>
            <div className={styles.contWidth}>
                <div className={styles.scheduleNav}>
                    <div onClick={handlePreviousDay}> <Icon className={styles.prevDay}><ArrowBackIos style={{ marginLeft: '8px' }} /></Icon>  </div>
                    <div className={styles.currentDay}>{currentDayOfWeek}</div>
                    <div className={styles.nextDay} onClick={handleNextDay}><Icon> <ArrowForwardIos /></Icon></div>


                </div>
                <DailySchedule schedule={schedule} currentDay={currentDayOfWeek} />
                <div className={styles.whiteBtn} onClick={() => setTimePickerOpen(true)} >Add Lesson</div>
            </div>
            </div>

        </div>
    );
}