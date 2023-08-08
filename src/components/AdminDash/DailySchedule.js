
import { Appointments, Scheduler, ViewState, WeekView } from "@devexpress/dx-react-scheduler";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState } from "react";



export const DailySchedule = ({ schedule, currentDay }) => {
    const [lessonsForCurrentDay, setLessonsForCurrentDay] = useState({});
    const [appointments, setAppointments] = useState([]);
    const [value, setValue] = useState();
    useEffect(() => {
        console.log('value =>', value)
    },[value])

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


    useEffect(() => {
        // Filter lessons for the current day whenever the schedule changes
        if (schedule) {
            const filteredLessons = {};

            Object.keys(schedule).forEach(key => {
                if (schedule[key].dayOfWeek === currentDay) {
                    filteredLessons[key] = schedule[key];
                }
            });

            setLessonsForCurrentDay(filteredLessons);
            convertLessonsToAppointments(filteredLessons);
        }
    }, [schedule, currentDay]);





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

    const ScheduleDev = () => {
        return (
            <Scheduler id="scheduler">

            </Scheduler>
        )
    }



    return (
        <div>
            <h1>Lessons for {currentDay}:</h1>
            {Object.keys(lessonsForCurrentDay)?.length > 0 ? (
                <ul>
                    {Object.entries(lessonsForCurrentDay).map(([id, l]) => (
                        <li key={id}>
                            {l.startTime} - {l.endTime} | Student: {l.studentName}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No lessons scheduled for {currentDay}.</p>
            )}

            

        </div>
    )
}