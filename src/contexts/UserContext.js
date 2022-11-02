import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);


export const AuthContext = createContext();

const UserContext = ({children}) => {
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(false);

  const createUser = (email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInUser = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }


  useEffect(()=> {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      })

      return () => {
        unsubscribe();
      }

  },[])

  const authInfo = {
    user,
    setUser,
    createUser,
    signInUser,
    loading,
    setLoading,

  }
  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>;
};

export default UserContext;
