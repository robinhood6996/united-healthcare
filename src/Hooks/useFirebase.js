import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { useEffect, useState } from 'react';
import { useHistory, withRouter } from 'react-router';
import Swal from 'sweetalert2';

import initializeAuthentication from '../firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const history = useHistory();


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
    }, [auth])

    //Signup user
    const signupUser = (email, pass, name) => {

        createUserWithEmailAndPassword(auth, email, pass)
            .then(res => {
                const { user } = res;
                setUser(user)
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Oops...',
                        text: `Thanks for creating account with us`
                    })
                })
            }).catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`
                })
            })
    }


    //Signin Function
    const signInUser = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }

    //Google Signin
    const googleProvider = new GoogleAuthProvider();
    const googleSingIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
        // .then(res => {
        //     setUser(res.user);
        //     history.push('/');
        //     // console.log(res.user)


        // })
        // .catch(error => {
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Oops...',
        //         text: `${error.message}`
        //     })
        // }).finally(() => setIsLoading(false));
    }

    //Signout
    const signOutUser = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                // history.push('/login');
                setUser({});

            }).catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`
                })
            }).finally(() => setIsLoading(false));
    }

    return {
        user,
        signInUser,
        signupUser,
        signOutUser,
        googleSingIn,
        isLoading
    };
};

export default useFirebase;