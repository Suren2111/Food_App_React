import { createContext } from "react";

const theme=localStorage.getItem('theme') || 'light';
const themeContext=createContext({
   defaultTheme: theme,
   setTheme: () => {} 
})

export default themeContext;