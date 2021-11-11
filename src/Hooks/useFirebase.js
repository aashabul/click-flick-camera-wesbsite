import { useState, useEffect } from 'react';
import initializeFirebase from '../Pages/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


initializeFirebase();

const useFirebase = () => {

    const [user, setUser] = useState({});

    const auth = getAuth();

    // for registration
    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;

            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;

            });
    }

    // for signin
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
            });
    }



    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    // observes user's state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                setUser(user);
                // ...
            } else {
                // User is signed out
                setUser({});
            }
        });
        return () => unsubscribe;
    }, [auth])

    return {
        user,
        registerUser,
        logout,
        loginUser,

    }


};

export default useFirebase;