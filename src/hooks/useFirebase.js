import React, { useEffect, useState } from 'react';
import initializationAuthentication from '../pages/LogIn/firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, sendPasswordResetEmail, TwitterAuthProvider, GithubAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword      } from "firebase/auth";

initializationAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const TwitterProvider = new TwitterAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const auth = getAuth();

  const handleUserRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user = result.user;
            console.log(user)
        })
}
 

    
    /* -----------------------------------------------------
    --------------------------------------------------------- */
    
    /* Handle Google Log In */
    const handleGoogleLogIn = () =>{
      return signInWithPopup(auth, googleProvider)
    }

    console.log(user)

    /* Handle facebook Log In */
    const handleFacebookLogIn = () =>{
        signInWithPopup(auth, facebookProvider)
        .then((result) => {
            setUser(result.user);
        }).catch((error) => {
          setError(error.message)
        });
    }

    /* Handle twitter log in */
    const handleTwitterLogIn = () => {
      signInWithPopup(auth, TwitterProvider)
      .then((result) => {
        setUser(result.user);
      }).catch((error) => {
        setError(error.message)
      });
    }
    /* handle git hub log in */
    const handleGitHubLogIn = () =>{
      signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        setUser(result.user);
      }).catch((error) => {
        setError(error.message);
      });
    }

    /* Get the currently signed-in user (observer) */
    useEffect(()=>{
        onAuthStateChanged(auth, user => {
            if (user) {
              setUser(user)
            } 
          });
    },[])

    /* Handle  Log Out */
    const handleGoogleLogOut = () =>{

        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            setError(error.message)
          });
    }


    return {
      handleUserRegister,
        handleGoogleLogIn,
        handleFacebookLogIn,
        handleTwitterLogIn,
        handleGoogleLogOut,
        handleGitHubLogIn,
        user,
        error,
    }
};

export default useFirebase;