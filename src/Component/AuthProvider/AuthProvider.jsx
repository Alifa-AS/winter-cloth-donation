import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user)
 
    // create new user
    const createNewUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    // login
    const userLogin =(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // logout
    const logOut = () =>{
        return signOut(auth)
    }

    // all value can access from here
    const authInfo = {
        user, 
        setUser,
        createNewUser,
        logOut,
        userLogin
    };

    // observer
    useEffect(()=>{}, [])
      const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)

        return() =>{
            unsubscribe();
        }

      })


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;