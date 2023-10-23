import React, { useContext, createContext, useState } from "react";

const AuthContext = createContext();

const useAuth = () => {
    return useContext(AuthContext);
};

const AuthProvider = (props) => {
    const [authUser, setAuthUser] = useState(
        sessionStorage.getItem('user') ? sessionStorage.getItem('user') : null
    );
    const [isLoggedIn, setLoggedIn] = useState(
        authUser ? true : false
    );

    const value = { authUser, setAuthUser, isLoggedIn, setLoggedIn };
    
    return (
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    );
};

export { useAuth, AuthProvider };
