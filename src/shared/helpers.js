export const uuid = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const uuidLength = 8;
    let uuid = '';

    for (let i = 0; i < uuidLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        uuid += characters[randomIndex];
    }

    return uuid;

}

export const uuid4 = () => {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
      },
    );
    return uuid;
  };


  const onAddStudent = async () => {
    if (authUser && studentName && parentEmail) {
      try {
        // Query Firestore to check if the email already exists within 'students'
        const creativePlayDoc = await db.collection('CreativePlay').doc('members').get();
        const studentsData = creativePlayDoc.data().students;
  
        // Find the student with the matching email
        let existingStudent;
        for (const studentId in studentsData) {
          if (studentsData[studentId].parentEmail === parentEmail) {
            existingStudent = studentsData[studentId];
            break;
          }
        }
  
        if (existingStudent) {
          // Email already exists, get the parentId of the existing student
          const existingParentId = existingStudent.parentId;
  
          console.log('Email already exists in the database. Existing parent ID:', existingParentId);
          // Now you can use 'existingParentId' in addStudentInfoToFirestore or any other needed logic
          // For example: addStudentInfoToFirestore(existingParentId);
          return;
        }
  
        // Email does not exist, proceed with user creation
        const data = {
          uid: uid,
          email: parentEmail,
          password: 'randomPW',
          displayName: studentName,
          disabled: false,
          role: 'member',
        };
        
        const addEmployee = httpsCallable(functions, 'createUser');
        addEmployee(data).then((result) => {
          const emp = result.data;
          console.log('Employee added, sign in:', emp, result.data);
          addStudentInfoToFirestore(uid); // Use the 'uid' here
          setStudentData(result);
          setStudentFormOpen(false);
        });
      } catch (error) {
        console.error('Error checking email:', error);
      }
    }
  };
  