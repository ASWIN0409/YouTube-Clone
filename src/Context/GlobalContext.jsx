import { createContext, useState } from "react";

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    }

    return <GlobalContext.Provider value={{ isOpen, toggleMenu }}>
        {children}
    </GlobalContext.Provider>
}