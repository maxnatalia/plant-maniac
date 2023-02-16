import { useContext, useState, createContext } from 'react'

const LoginContext = createContext()
export const LoginProvider = ({ children }) => {

    const [message, setMessage] = useState("LOG IN 🪴");
    return (
        <LoginContext.Provider value={{ message, setMessage }}>
            {children}
        </LoginContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(LoginContext);
}