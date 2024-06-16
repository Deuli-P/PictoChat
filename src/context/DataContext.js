// PreferenceContext.js
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { storeTheme, getTheme, getData, storeData, storeLastModifiedTimestamp, getLastModifiedTimestamp }  from '../config/AsyncStorage';
import { DarkTheme, LightTheme } from '../theme/themeColor';
import dataImport from '../data/dataConvert.json'

import supabase from '../config/supabaseClient';

// import { data, traduction } from '../../Backend/MongoDB/mongoDB';

 const DataContext = createContext({
  isThemeDark: false ,
  setIsThemeDark: () => {},
  toggleTheme: () => {},
  isLoading: true,
  dataStore: [],
});

export const DataProvider = ({ children }) => {
  
  const [isLoading, setIsLoading] = useState(true);

  // LANGUAGE A implementer
  const [ lang , setLang ] = useState("fr");

  const toggleLanguage = ()=> {
  }

  // THEME
  const [isThemeDark, setIsThemeDark] = useState(null);

  const toggleTheme = useCallback(() => {
    setIsThemeDark(!isThemeDark);
    const newTheme = !isThemeDark;
    storeTheme(newTheme);
    
  }, [isThemeDark]);
  
  
  const theme = isThemeDark ? DarkTheme : LightTheme ;


  // DATA
  const [dataStore, setDataStore] = useState([]);


  const fetchData = async()=> {
    try{
      const { data, error } = await supabase.from('pictogramme').select("*")
      if(error){
        console.log('[SUPABASE] Error:',error);
      }
      else{
        console.table('[SUPABASE] Data:',typeof data);
        setDataStore(data)
      }
    }
    catch(err){
    console.error(err);
    } 
  }

  const fetchThemeData = async () => {
    try {
      const value = await getTheme();
      if (value !== null) {
        setIsThemeDark(value);
      }
      else{
        setIsThemeDark(false);
      }
      const data = await getData();
      if (data.length === undefined || data.length === 0) {
        // En attendant le serveur
        const newData = dataImport;
        // Pour le serveur
        // const newData = await fetchingData();
        storeData(newData);
        // storeLastModifiedTimestamp()
        const replaceData = await getData();
        setDataStore(replaceData);
      }
      else{
        setDataStore(data);
        }

    } catch (e) {
      alert( e);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); 
    }
  };

  useEffect(() => {
    fetchThemeData();
    fetchData()
  }, []);

  const value= useMemo(() => ({
    isThemeDark,
    setIsThemeDark,
    toggleTheme,
    theme,
    isLoading,
    dataStore,
  }), [isThemeDark, toggleTheme, isLoading, dataStore]);

  return (

    <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
  );
};

export const useDataSet = () => {
  const context = useContext(DataContext);

  if (context === undefined) {
    throw new Error('useDataSet must be used within a AsyncProvider');
  }
  return context;
}
