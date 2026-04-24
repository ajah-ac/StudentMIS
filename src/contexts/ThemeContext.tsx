import { useState ,createContext, useContext} from "react"

interface Theme{
theme:string,
toggleTheme:()=>void
}
const themeContext=createContext<Theme|null>(null)

const ThemeProvider = ({children}:{children:React.ReactNode}) => {
    const [theme,setTheme]=useState<'light' |'dark'>('light')
const toggleTheme=()=>{setTheme(prev=>prev!=='light'?'dark':'light')}
  return (
<themeContext.Provider value={{theme,toggleTheme}}>{children}</themeContext.Provider>
  )
}

export default ThemeProvider
export const useThemeContext=()=>{
    const context=useContext(themeContext)
    if(!context){
throw new Error('useThemeContext must be used inside ThemeProvider')    }
return context
}