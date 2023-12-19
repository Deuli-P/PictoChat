import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeTheme = async (value) => {
    try{
        console.log('[AsyncStorage]jsonValue:', value);
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