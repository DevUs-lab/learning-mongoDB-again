import React, { createContext, useState, useContext } from "react";

// 1️⃣ Create Context
const UserContext = createContext();

// 2️⃣ Create a provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // default = not logged in

    // example function to login a user
    const login = (userData) => setUser(userData);

    // example function to logout
    const logout = () => setUser(null);

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

// 3️⃣ Custom hook for easy use
export const useUser = () => useContext(UserContext);
