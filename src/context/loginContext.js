import { useContext, useState, useEffect, createContext } from 'react'

const LoginContext = createContext()
export const LoginProvider = ({ children }) => {
    const [message, setMessage] = useState("you're not logged in");
    return (
        <LoginContext.Provider value={{ message, setMessage }}>
            {children}
        </LoginContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(LoginContext);
}