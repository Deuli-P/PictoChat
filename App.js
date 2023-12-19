import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StackScreen } from "./src/Navigation/NavigationStack";
import { StyleSheet, Text, View , TouchableOpacity} from "react-native";
import { PaperProvider, MD3LightTheme, MD3DarkTheme, ActivityIndicator} from "react-native-paper";
import { PreferencesContext } from './src/context/PreferenceContext';
import { useTheme} from 'react-native-paper';
import ModalButton from "./src/components/ModalButton";
import { getTheme, storeTheme } from "./src/config/AsyncStorage";

const Welcome = ({setAppOpening, isThemeDark, isLoading}) => {

  // STYLES
  const theme = useTheme();
  const styles = StyleSheet.create({
    button: {
      backgroundColor: theme.colors.primary,
      paddingHorizontal: 48,
      paddingVertical: 16 ,
      borderRadius: 10,
      marginTop: 10,
      color: theme.colors.text,
      
    },
    buttonText: {
      fontSize: 36,
      color: 'white',
    },
    background: {
      backgroundColor: theme.colors.background,
      justifyContent: "center",
      alignItems:"center",
      flex: 1,
      color: theme.colors.text,
    },
    text: {
      color: theme.colors.text,
    },
    title: {
      color: theme.colors.primary,
      fontSize: 40,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    loader: {
      color: theme.colors.primary,
      marginTop: 30,
      transform: [{ scale: 2 }],
    }
  });
  
  return(
    <SafeAreaProvider style={styles.background}>
          <Text style={styles.title}>Welcome</Text>
          {isLoading ? 
            (
              <ActivityIndicator
              size="large" 
              style={styles.loader}
            />
            )
          : 
            (
                <TouchableOpacity
                  style={styles.button}
                  onPress={()=> setAppOpening(false)}
                  activeOpacity={0.7}
                > 
                    <Text style={styles.buttonText} >Start</Text>
                </TouchableOpacity>
              )
          }
    </SafeAreaProvider>
      )
}

export default function App() {


  const lightColor={
    "colors": {
      "primary": "rgb(120, 69, 172)",
      "onPrimary": "rgb(255, 255, 255)",
      "primaryContainer": "rgb(240, 219, 255)",
      "onPrimaryContainer": "rgb(44, 0, 81)",
      "secondary": "rgb(102, 90, 111)",
      "onSecondary": "rgb(255, 255, 255)",
      "secondaryContainer": "rgb(237, 221, 246)",
      "onSecondaryContainer": "rgb(33, 24, 42)",
      "tertiary": "rgb(128, 81, 88)",
      "onTertiary": "rgb(255, 255, 255)",
      "tertiaryContainer": "rgb(255, 217, 221)",
      "onTertiaryContainer": "rgb(50, 16, 23)",
      "error": "rgb(186, 26, 26)",
      "onError": "rgb(255, 255, 255)",
      "errorContainer": "rgb(255, 218, 214)",
      "onErrorContainer": "rgb(65, 0, 2)",
      "background": "rgb(255, 251, 255)",
      "onBackground": "rgb(29, 27, 30)",
      "surface": "rgb(255, 251, 255)",
      "onSurface": "rgb(29, 27, 30)",
      "surfaceVariant": "rgb(233, 223, 235)",
      "onSurfaceVariant": "rgb(74, 69, 78)",
      "outline": "rgb(124, 117, 126)",
      "outlineVariant": "rgb(204, 196, 206)",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "rgb(50, 47, 51)",
      "inverseOnSurface": "rgb(245, 239, 244)",
      "inversePrimary": "rgb(220, 184, 255)",
      "elevation": {
        "level0": "transparent",
        "level1": "rgb(248, 242, 251)",
        "level2": "rgb(244, 236, 248)",
        "level3": "rgb(240, 231, 246)",
        "level4": "rgb(239, 229, 245)",
        "level5": "rgb(236, 226, 243)"
      },
      "surfaceDisabled": "rgba(29, 27, 30, 0.12)",
      "onSurfaceDisabled": "rgba(29, 27, 30, 0.38)",
      "backdrop": "rgba(51, 47, 55, 0.4)"
    }
}
const darkColor={
    "colors": {
      "primary": "rgb(220, 184, 255)",
      "onPrimary": "rgb(71, 12, 122)",
      "primaryContainer": "rgb(95, 43, 146)",
      "onPrimaryContainer": "rgb(240, 219, 255)",
      "secondary": "rgb(208, 193, 218)",
      "onSecondary": "rgb(54, 44, 63)",
      "secondaryContainer": "rgb(77, 67, 87)",
      "onSecondaryContainer": "rgb(237, 221, 246)",
      "tertiary": "rgb(243, 183, 190)",
      "onTertiary": "rgb(75, 37, 43)",
      "tertiaryContainer": "rgb(101, 58, 65)",
      "onTertiaryContainer": "rgb(255, 217, 221)",
      "error": "rgb(255, 180, 171)",
      "onError": "rgb(105, 0, 5)",
      "errorContainer": "rgb(147, 0, 10)",
      "onErrorContainer": "rgb(255, 180, 171)",
      "background": "rgb(29, 27, 30)",
      "onBackground": "rgb(231, 225, 229)",
      "surface": "rgb(29, 27, 30)",
      "onSurface": "rgb(231, 225, 229)",
      "surfaceVariant": "rgb(74, 69, 78)",
      "onSurfaceVariant": "rgb(204, 196, 206)",
      "outline": "rgb(150, 142, 152)",
      "outlineVariant": "rgb(74, 69, 78)",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "rgb(231, 225, 229)",
      "inverseOnSurface": "rgb(50, 47, 51)",
      "inversePrimary": "rgb(120, 69, 172)",
      "elevation": {
        "level0": "transparent",
        "level1": "rgb(39, 35, 41)",
        "level2": "rgb(44, 40, 48)",
        "level3": "rgb(50, 44, 55)",
        "level4": "rgb(52, 46, 57)",
        "level5": "rgb(56, 49, 62)"
      },
      "surfaceDisabled": "rgba(231, 225, 229, 0.12)",
      "onSurfaceDisabled": "rgba(231, 225, 229, 0.38)",
      "backdrop": "rgba(51, 47, 55, 0.4)"
    }
}
const LightTheme ={
  ...MD3LightTheme,
  ...lightColor
}
const DarkTheme ={
  ...MD3DarkTheme,
  ...darkColor
}


const [isThemeDark, setIsThemeDark] = React.useState(false);
const [list, setList] = React.useState([]);
const [isModalVisible, setIsModalVisible] = React.useState(false);


const toggleTheme = React.useCallback(() => {
  setIsThemeDark(!isThemeDark);
  const newTheme = !isThemeDark;
  storeTheme(newTheme);
}, [isThemeDark]);


const fetchThemeData =async () => {
  try {
    const value =  await getTheme();
    if(value !== null) {
      console.log('[APP]Value fetch sortie:', value);
      setIsThemeDark(value);
      console.log('[APP]isThemeDark sortie:', isThemeDark);
    }
  } catch(e) {
    alert("[APP] Fetch",e);
  }
  finally{
    setIsLoading(false)
  }
}

React.useEffect(()=>{
  fetchThemeData();
},[])

const theme = isThemeDark ? DarkTheme : LightTheme;



const preferences = React.useMemo(
  () => ({
    toggleTheme,
    isThemeDark,
    isModalVisible,
    list,
  }),
  [toggleTheme, isThemeDark]
);

const [isLoading, setIsLoading] = React.useState(true);
const [appOpening, setAppOpening] = React.useState(true)

  return (
    <SafeAreaProvider>
      <PreferencesContext.Provider value={{ isThemeDark, toggleTheme, isModalVisible}}>
        <PaperProvider theme={theme}>
          {appOpening && <Welcome setAppOpening={setAppOpening} isLoading={isLoading}/>}
          { appOpening ? null :
            (
              <>
                <StackScreen /> 
                <ModalButton isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} getTheme={getTheme}/>
                {/* Creer l'apparition de la modal */}
                {/* {isModalVisible && } */}
              </>
            )
          }
          </PaperProvider>
      </PreferencesContext.Provider>
    </SafeAreaProvider>
  );
}