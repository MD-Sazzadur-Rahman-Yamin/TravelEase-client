import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import AuthContext from "./AuthContext";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  const loginWithGoogle = () => {
    setLoadingUser(true);
    return signInWithPopup(auth, googleProvider).finally(() =>
      setLoadingUser(false)
    );
  };
  const authCreateUserWithEmailAndPassword = (email, password) => {
    setLoadingUser(true);
    return createUserWithEmailAndPassword(auth, email, password).finally(() =>
      setLoadingUser(false)
    );
  };
  const authSignInWithEmailAndPassword = (email, password) => {
    setLoadingUser(true);
    return signInWithEmailAndPassword(auth, email, password).finally(() =>
      setLoadingUser(false)
    );
  };

  const updateUser = (updatedData) => {
    setLoadingUser(true);
    return updateProfile(auth.currentUser, updatedData).finally(() =>
      setLoadingUser(false)
    );
  };
  
  const updatePassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoadingUser(false);
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    setUser,
    loadingUser,
    setLoadingUser,
    loginWithGoogle,
    authCreateUserWithEmailAndPassword,
    authSignInWithEmailAndPassword,
    updateUser,
    updatePassword,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
