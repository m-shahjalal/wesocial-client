import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializationAuthentication from "../Pages/firebase/firebase.init";

initializationAuthentication();

const useFirebase = () => {
    const [userId, setUsers] = useState({})
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    /* google log in */
    const handleGoogleLogIn = () =>{
      setIsLoading(true);
       return signInWithPopup(auth, googleProvider)
    }



    /* Get the currently signed-in user */
    useEffect(()=>{
        onAuthStateChanged(auth, userId => {
            if (userId) {
              setUsers(userId)
            } 
            setIsLoading(false);
          });
    },[])

    const logOut = () => {
        signOut(auth).then(() => {
            setUsers({})
          }).finally( () => setIsLoading(false))
    }


    return {
        userId,
        error,
        handleGoogleLogIn,
        logOut,
        isLoading
    }
};

export default useFirebase;