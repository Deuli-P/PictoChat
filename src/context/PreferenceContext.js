import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const PreferencesContext = React.createContext({
  toggleTheme: () => {},
  isThemeDark: false,
  isModalVisible: false,
  setModalVisible: () => {},
});

export const PreferencesProvider = ({ children }) => {
  
  const [isThemeDark, setIsThemeDark] = useState(false);

  const [list, setList] = React.useState([]);
    
  const addList = (item) => {
      if (list.length < 4) {
          setList([...list, item]);
      }
  };
  
  const removeList = (item) => {
      setList(list.filter((i) => i.id !== item.id));
  };
  
  const getTheme = async () => {
    try {
      const value = await AsyncStorage.getItem('isThemeDark');
      if(value !== null) {
        setIsThemeDark(JSON.parse(value));
      }
    } catch(e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getTheme();
  }, []);

  useEffect(() => {
    try {
      AsyncStorage.setItem('isThemeDark', JSON.stringify(isThemeDark));
    } catch (e) {
      console.error(e);
    }
  }, [isThemeDark]);

  const toggleTheme = () => {
    setIsThemeDark(!isThemeDark);
  };

  return (
    <PreferencesContext.Provider value={{ isThemeDark, toggleTheme }}>
      {children}
    </PreferencesContext.Provider>
  );
};