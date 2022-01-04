import React,{useEffect,useState} from 'react'

export const useDarkMode = () => {
const [theme, settheme] = useState(localStorage.theme);
const colorTheme = theme === 'dark' ? 'light' :'dark';
  useEffect(() => {
      const root = window.document.documentElement;
      root.classList.remove(colorTheme)
      root.classList.add(theme);
      localStorage.setItem('theme',theme)
  }, [theme,colorTheme]);
  return[colorTheme,settheme];
  // DARK BG - #262837,DARK_NAV & SIDE - #1f1d2c,DARKBTN - #525298 DARKFONT- #ffffff DARK-SELECT-BG - #262837 
}

