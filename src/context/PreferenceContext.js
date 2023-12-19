import React, { useState, useEffect } from 'react';
import { storeTheme } from '../config/AsyncStorage';

export const PreferencesContext = React.createContext({
  toggleTheme: () => {},
  isThemeDark: false,
});

export const PreferencesProvider = ({ children }) => {
  
  const [isThemeDark, setIsThemeDark] = useState(null);

  const [list, setList] = React.useState([]);
    
  const addList = (item) => {
      if (list.length < 4) {
          setList([...list, item]);
      }
  };
  
  const removeList = (item) => {
      setList(list.filter((i) => i.id !== item.id));
  };

  const clearList = (item) => {
      setList([]);
  };

  const toggleTheme = () => {
    setIsThemeDark(!isThemeDark);
    const newTheme = !isThemeDark;
    storeTheme(newTheme);
  };

  return (
    <PreferencesContext.Provider value={{ isThemeDark, toggleTheme, list, addList, clearList, removeList }}>
      {children}
    </PreferencesContext.Provider>
  );
};