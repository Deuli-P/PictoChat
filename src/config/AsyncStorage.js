import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeTheme = async (value) => {
    try{
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem("newtheme", jsonValue);
    } 
    catch(e){
        alert('[ASYNC]Store:',e);
    }
}

export const getTheme = async () => {
    try{
        const jsonValue = await AsyncStorage.getItem("newtheme");
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } 
    catch(e){
        alert('[ASYNC]Get:',e);
    }
}

export const storeData = async (value) => {
    try{
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem("fetchData", jsonValue);
    } 
    catch(e){
        alert('[ASYNC]Store:',e);
    }
}

export const getData = async () => {
    try{
        const jsonValue = await AsyncStorage.getItem("fetchData");
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } 
    catch(e){
        alert('[ASYNC]Get:',e);
    }
}

const storeLastModifiedTimestamp = async () => {
    try {
        const newDate = Date.now().toString();
      await AsyncStorage.setItem('lastModifiedTimestamp',newDate);
    } catch (error) {
      console.error('Erreur lors du stockage du timestamp :', error);
    }
  };

const getLastModifiedTimestamp = async () => {
    try {
        const lastModifiedTimestamp = await AsyncStorage.getItem('lastModifiedTimestamp');
        return lastModifiedTimestamp;
    } catch (error) {
        console.error('Erreur lors de la récupération du timestamp :', error);
    }
}