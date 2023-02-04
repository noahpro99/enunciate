import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useState } from "react";
import { auth } from "../firebase";



export const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});

    React.useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });

        return () => {
            unsub();
        }
    }, []);


    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};