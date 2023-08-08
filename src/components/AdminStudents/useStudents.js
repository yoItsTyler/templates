import { useEffect, useState } from "react";
import { fb } from "../../service/firebase";


export const useStudents = () => {
    const [students, setStudents] = useState({});

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

    }, []);
    return students;
}