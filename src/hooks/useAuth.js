
import { useEffect, useState } from 'react';
import { fb } from '../service/firebase';

export const useAuth = () => {
  const [isAuthed, setIsAuthed] = useState();
  const [authUser, setAuthUser] = useState();

  useEffect(() => {
    console.log('useAuth running');
    const unsubscribe = fb?.auth.onAuthStateChanged(user => {
      if (user) {
        setAuthUser(user);
        setIsAuthed(true);
      } else {
        setAuthUser(null);
        setIsAuthed(false);
      }
    });
    return unsubscribe;
  }, []);

  return {
    isAuthed,
    authUser,
  };
};

export const useIsAdmin = () => {
  const { isAuthed, authUser } = useAuth();
  const [isAdmin, setIsAdmin] = useState('');

  useEffect(() => {
    if (authUser) {
      const fetchAdminUid = async () => {
        try {
          const adminDocRef = fb.firestore.collection('creativePlay').doc('members');
          const adminDoc = await adminDocRef.get();
        //  console.log('ADMIN FIELD DATA', adminDoc);
          if (adminDoc.exists) {
            const adminFieldData = adminDoc.data().admin[0];
            setIsAdmin(adminFieldData === authUser.uid);
           // console.log("admin field data", adminFieldData, 'true or false =', adminFieldData === authUser.uid)
          } else {
            console.log('Admin document not found.');
          }
        } catch (error) {
          console.error('Error fetching admin data:', error);
        }
      }
      fetchAdminUid()
    }


  }, [authUser])

  return isAdmin;

}
