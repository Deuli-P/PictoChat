// PreferenceContext.js
import React from 'react';
import { storeTheme } from '../config/AsyncStorage';




export const PreferencesContext = React.createContext({
  isThemeDark: false,
  toggleTheme: () => {},
  list: [],
  listDispatch: () => {},
});

export const PreferencesProvider = ({ children }) => {
  
  const [isThemeDark, setIsThemeDark] = React.useState(null);

  const toggleTheme = () => {
    setIsThemeDark(!isThemeDark);
    const newTheme = !isThemeDark;
    storeTheme(newTheme);
  };


  const value={
    isThemeDark,
    toggleTheme,
    list,
  }
  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
};