import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, 
      onAuthStateChanged,
      signInWithEmailAndPassword,
      signOut, 
      updateProfile} from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(user,loading)
 
    // create new user
    const createNewUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    // login
    const userLogin =(email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // logout
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
        
    }

    const updateUserProfile = (updateData) =>{
        return updateProfile(auth.currentUser, updateData)
    }

    // all value can access from here
    const authInfo = {
        user, 
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
        updateUserProfile
    };

    // observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false);
    });
        return() =>{
            unsubscribe(); 
        };
      }, []);


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;