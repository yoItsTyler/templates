import { MenuItem, Select, TextField } from '@mui/material';
import { Icon } from '@material-ui/core';
import { httpsCallable, getFunctions } from 'firebase/functions';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { fb } from '../../service/firebase';
import { uuid4 } from '../../shared/helpers';
import styles from './styles.module.css';
import { Close, Send } from '@mui/icons-material';


export const AdminStudents = () => {
    const location = useLocation();
    const authUser = useAuth();
    const [students, setStudents] = useState({});
    const schedule = location.state?.schedule;
    const functions = getFunctions();



    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const docRef = fb.firestore.collection('creativePlay').doc('members');
                const membersDoc = await docRef.get();
                if (!membersDoc.empty) {
                    const studentsData = membersDoc.data().students;
                    //  const studentsArray = Object.values(studentsData);
                    setStudents(studentsData);

                }
            } catch (error) {
                console.error('error:', error)
            }
        }

        fetchStudents()

    }, [])


    useEffect(() => {
        if (schedule) {
            console.log("schedule => ", schedule)
        }
    }, [schedule])
    useEffect(() => {
        if (students) {
            console.log("STUDENTS => ", students)
        }
    }, [students])


    async function sendSigninEmail() {
        if (schedule) {


        }
    }
    const AddStudentAccount = () => {

        const uid = uuid4();
        const studentId = uuid4();
        const [studentData, setStudentData] = useState();
        const [studentFormOpen, setStudentFormOpen] = useState(false);
        const [studentName, setStudentName] = useState();
        const [parentEmail, setParentEmail] = useState();
        const [lessonDuration, setLessonDuration] = useState('30');

        const addStudentInfoToFirestore = async (existingParentId) => {
            /*
            fb.firestore.collection('creativePlay').doc('members')..set({
                parentEmail: parentEmail,
                lessonDuration: lessonDuration,
                uid: uid
            })*/
            const membersRef = fb.firestore.collection('creativePlay').doc('members');

            if (existingParentId) {
                await membersRef.update({
                    [`students.${studentId}`]: {
                        parentId: existingParentId,
                        studentName: studentName,
                        parentEmail: parentEmail,
                        lessonDuration: lessonDuration,
                    }
                })
                setStudentName('');
                setParentEmail('');
                setLessonDuration('30');
                return;
            }

            await membersRef.update({
                [`students.${studentId}`]: {
                    parentId: uid,
                    studentName: studentName,
                    parentEmail: parentEmail,
                    lessonDuration: lessonDuration,
                }
            })
            console.log('Student data after firestore update:', studentData)

            // Clear the form inputs after submission
            setStudentName('');
            setParentEmail('');
            setLessonDuration('30');
        }

        const onAddStudent = async () => {
            if (authUser && studentName && parentEmail) {
                try {
                    const docRef = await fb.firestore.collection('creativePlay').doc('members').get();
                    const studentsData = docRef.data().students;

                    let existingStudent;
                    let existingStudentId;
                    for (const studentId in studentsData) {
                        if (studentsData[studentId].parentEmail === parentEmail) {
                            existingStudent = studentsData[studentId];
                            existingStudentId = studentId;
                            break;
                        }
                    }

                    if (existingStudent) {
                        // Email already exists, get the parentId of the existing student
                        const existingParentId = existingStudent?.parentId;

                        console.log('Email already exists in the database. Existing parent ID:', existingParentId, 'whole object', existingStudent);
                        // Now you can use 'existingParentId' in addStudentInfoToFirestore or any other needed logic
                        addStudentInfoToFirestore(existingParentId);

                        return;
                    }
                    //Email does not exist, proceed with user creation
                    var data = {
                        "uid": uid,
                        "email": parentEmail,
                        "password": "randomPW",
                        "displayName": studentName,
                        "disabled": false,
                        "role": "member"
                    };
                    const addEmployee = httpsCallable(functions, 'createUser');
                    addEmployee(data).then((result) => {
                        const emp = result.data;
                        console.log('employ added sign in', emp, result.data)
                        console.log('res', result);
                        //sendRequest();
                        addStudentInfoToFirestore()
                        setStudentData(result)
                        setStudentFormOpen(false);
                    });
                } catch (error) {
                    console.error('Error checking email:', error);
                }
            }
        };


        useEffect(() => {
            if (studentData !== undefined) {
                //  addStudentInfoToFirestore()
            }
        }, [studentData])

        const handleSubmit = (e) => {
            e.preventDefault();
            const newStudent = {
                fullName: studentName,
                parentEmail,
                lessonDuration: parseInt(lessonDuration),
            };
            // Call the onAddStudent function with the new student data
            onAddStudent(newStudent);


        };

        const StudentForm = () => {
            return (
                <div className={styles.popBackground}>
                    <div className={styles.pop}>
                        <div className={styles.closeCont}>
                            <Icon  ><Close onClick={() => { setStudentFormOpen(false) }} className={styles.closeSocialPop} /></Icon>
                        </div>

                        <form onSubmit={handleSubmit} className={styles.addStudentForm}>
                            <div>
                                <label className={styles.title2}>
                                    Student's Full Name:
                                    <TextField variant='outlined' style={{ marginTop: '3px', marginBottom: '9px' }}
                                        type="text"
                                        value={studentName}
                                        onBlur={(e) => setStudentName(e.target.value)}

                                        required
                                    />
                                </label>
                            </div>
                            <div>
                                <label className={styles.title2}>
                                    Parent's Email Address:
                                    <TextField variant='outlined' style={{ marginTop: '3px', marginBottom: '9px' }}
                                        type="email"
                                        value={parentEmail}
                                        onBlur={(e) => setParentEmail(e.target.value)}
                                        required
                                    />
                                </label>
                            </div>
                            <div>
                                <label className={styles.title2}>
                                    Lesson Duration:
                                    <Select style={{ marginTop: '3px', marginBottom: '9px' }}
                                        value={lessonDuration}
                                        onChange={(e) => setLessonDuration(e.target.value)}
                                    >
                                        <MenuItem value="30">30 minutes</MenuItem>
                                        <MenuItem value="45">45 minutes</MenuItem>
                                        <MenuItem value="60">60 minutes</MenuItem>
                                    </Select>
                                </label>
                            </div>
                            <button type="submit"
                                className={styles.saveBtn}
                                disabled={!studentName || !parentEmail || !lessonDuration}
                            >Add Student</button>
                        </form>
                    </div>
                </div>
            )
        }


        return (
            <div>
                <button onClick={() => { setStudentFormOpen(!studentFormOpen) }}
                >
                    Add New Student
                </button>
                {studentFormOpen && <StudentForm />}

            </div>
        )
    }

    async function sendSigninEmail(id, l) {
        console.log('send email to', l, 'id', id)
        /*  if(l) {
              fb?.auth?.sendSignInLinkToEmail(l.email, {
                  url: `https://scheduler-25721.web.app/${id}/`
              })
          }*/

    }



    return (
        <div>
            <AddStudentAccount />
            <div>Students</div>
            {Object.keys(students)?.length > 0 ? (
                <div className={styles.studentCollumn}>
                    {Object.entries(students).map(([id, l]) => (
                        <div key={id} className={styles.studentRow} >
                            <div> {l.studentName} </div>
                            <div>{l.parentEmail}</div>
                            <Icon
                            ><Send onClick={() => { sendSigninEmail(id, l) }} /> </Icon>

                        </div>

                    ))}
                </div>
            ) : (
                null
            )
            }






        </div>
    )
}