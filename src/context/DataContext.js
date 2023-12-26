// PreferenceContext.js
import React from 'react';
import { storeTheme, getTheme, getData, storeData, storeLastModifiedTimestamp, getLastModifiedTimestamp }  from '../config/AsyncStorage';
import { DarkTheme, LightTheme } from '../theme/themeColor';
import { fetchingData } from '../config/Axios';
import dataImport from '../data/dataConvert.json'

 const DataContext = React.createContext({
  isThemeDark: false ,
  setIsThemeDark: () => {},
  toggleTheme: () => {},
  isLoading: true,
  dataStore: [],
});

export const DataProvider = ({ children }) => {
  
  const [isLoading, setIsLoading] = React.useState(true);

  // LANGUAGE A implementer
  const [ lang , setLang ] = React.useState("fr");

  const toggleLanguage = ()=> {
  }

  // THEME
  const [isThemeDark, setIsThemeDark] = React.useState(null);

  const toggleTheme = React.useCallback(() => {
    setIsThemeDark(!isThemeDark);
    const newTheme = !isThemeDark;
    storeTheme(newTheme);
    
  }, [isThemeDark]);
  
  
  const theme = isThemeDark ? DarkTheme : LightTheme ;


  // DATA
  const [dataStore, setDataStore] = React.useState([]);


  const fetchThemeData = async () => {
    try {
      const value = await getTheme();
      if (value !== null) {
        setIsThemeDark(value);
        console.log("[APP] Theme valide");
      }
      else{
        alert("[APP] No theme data found")
      }
      const data = await getData();
      if (data.length === 0) {
        // En attendant le serveur
        const newData = dataImport;
        // Pour le serveur
        // const newData = await fetchingData();
        storeData(newData);
        // storeLastModifiedTimestamp()
        const replaceData = await getData();
        setDataStore(replaceData);
        console.log("[APP] New Data valide:", dataStore.length);
      }
      else{
        setDataStore(data);
        console.log("[APP] Data valide:", dataStore.length);
        }

    } catch (e) {
      alert( e);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); 
    }
  };

  React.useEffect(() => {
    console.log("[CONTEXT] JSON:", dataImport.length);
    fetchThemeData();
  }, []);

  const value= React.useMemo(() => ({
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
  const context = React.useContext(DataContext);

  if (context === undefined) {
    throw new Error('useDataSet must be used within a AsyncProvider');
  }
  return context;
}
