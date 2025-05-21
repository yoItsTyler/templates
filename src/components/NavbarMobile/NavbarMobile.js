import styles from './styles.module.css';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import React, { Component } from 'react'
import { Icon } from '@material-ui/core';
import { useEffect } from 'react';
import { Close } from '@mui/icons-material';
import { fb } from '../../service/firebase';
import { useAuth, useIsAdmin } from '../../hooks';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';




export const NavbarMobile = () => {
  const [passwordMsgOpen, setPasswordMsgOpen] = useState(false);
  const auth = getAuth();
  const { authUser } = useAuth();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const isAdmin = useIsAdmin();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [windowDH, setWindowDH] = useState(null);

  useEffect(() => {
    // setWindowDW(window.innerWidth);
    setWindowDH(window.innerHeight);
  }, []);

  let vh = windowDH * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);

  const getHeight = () => window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

  function useCurrentHeight() {
    let [height, setHeight] = useState(getHeight());

    useEffect(() => {
      let timeoutId = null;
      const resizeListener = () => {

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => setHeight(getHeight(), 50));
      };

      window.addEventListener('resize', resizeListener, false);
      //  window.addEventListener('scroll', resizeListener, false);

      return () => {
        window.removeEventListener('resize', resizeListener, false);
        //  window.removeEventListener('scroll', resizeListener, false);

      }
    }, [])
    // console.log('resize function ran');
    return height;
  }

  let h = useCurrentHeight();
  //console.log(h);



  useEffect(() => {
    let vh = h * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    // console.log('vh', vh, 'h:', h);
    setWindowDH(h);
    // console.log('*after resize Listener VH was set in css as::', vh);

  }, [h]);
  const Logout = () => {
    fb.auth.signOut().then(() => history.push('/'));
  }
  const changePswd = () => {
    sendPasswordResetEmail(auth, authUser?.email)
      .then(() => {
        // Password reset email sent!
        // ..
        setPasswordMsgOpen(!passwordMsgOpen)
        console.log('email sent');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  const ChangePswdMsg = () => {
    return (
      <div className={styles.popBackground}>
        <div className={styles.popCont}>
          <div className={styles.closeCont}> <Icon><Close color="#2C2C2E" onClick={() => setPasswordMsgOpen(false)} className={styles.closeSocialPop} /></Icon> </div>
          <div className={styles.timeTitle}>Check your email for your password reset link</div>

        </div>
      </div>
    )
  }




  const DropDown = () => {

    return (
      <div className={styles.bg} onClick={toggleMenu}>
        <div className={styles.dropDown}>
          <div className={styles.iconCont}>
            <Icon className={styles.close}>
              <Close onClick={toggleMenu}
              />
            </Icon>
          </div>
          {isAdmin === true ? (
            <div className={styles.page2} onClick={() => history.push('/students')}
            >View Students</div>
          ) : (
            <div className={styles.page2} onClick={changePswd}
            >Change Password</div>
          )}
          
          <div className={styles.page2} onClick={() => history.push('/marketing')}
          >Marketing</div>
          <div className={styles.page2} onClick={() => history.push('/about')}
          >About</div>
          <div className={styles.page2} onClick={Logout}
          >Logout</div>

        </div>
      </div>
    )
  }


  return (
    <div className={styles.main}>
      {passwordMsgOpen && <ChangePswdMsg />}

      <div className={styles.row}>
        <div className={styles.right}>
          <div className={styles.menu}
            onClick={toggleMenu}

          >Menu</div>

        </div>
      </div>
      {isOpen ? (
        <DropDown />

      ) : (
        <div></div>

      )}

    </div>
  )
}