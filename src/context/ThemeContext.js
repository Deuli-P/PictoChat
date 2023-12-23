// PreferenceContext.js
import React from 'react';
import { storeTheme, getTheme } from '../config/AsyncStorage';
import { DarkTheme, LightTheme } from '../theme/themeColor';

export const ThemeContext = React.createContext({
  isThemeDark: false ,
  setIsThemeDark: () => {},
  toggleTheme: () => {},
  isLoading: true,
});

export const ThemeProvider = ({ children }) => {

  const [isThemeDark, setIsThemeDark] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);


  const toggleTheme = React.useCallback(() => {
    setIsThemeDark(!isThemeDark);
    const newTheme = !isThemeDark;
    storeTheme(newTheme);
  }, [isThemeDark]);


  const theme = isThemeDark ? DarkTheme : LightTheme ;
  ;

  const fetchThemeData = async () => {
    try {
      const value = await getTheme();
      if (value !== null) {
        setIsThemeDark(value);
      }
      else{
        alert("[APP] No theme data found")
      }
    } catch (e) {
      alert("[APP] Fetch", e);
    } finally {
        setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchThemeData();
  }, []);

  const value= React.useMemo(() => ({
    isThemeDark,
    setIsThemeDark,
    toggleTheme,
    theme,
    isLoading,
  }), [isThemeDark, toggleTheme, isLoading]);

  return (

    <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
  );
};
