import { ReactNode, createContext, useContext, useState } from "react";

interface ThemeContextType{
    theme:string;
    toggleTheme:()=>void;
}
export const ThemeContext=createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider= ({children}:{children:ReactNode})=>{
    const [theme,setTheme]=useState<string>('light');
    const toggleTheme=()=>{
        setTheme(prevTheme=>(prevTheme==='light'?'dark':'light'));
        document.querySelector("body")?.setAttribute("data-theme",theme==='dark'?'light':'dark')
    };



    return <ThemeContext.Provider value={{theme,toggleTheme}}>{children}</ThemeContext.Provider>
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
  };

