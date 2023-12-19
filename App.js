import { GestureHandlerProvider } from 'react-native-gesture-handler';
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StackScreen } from "./src/Navigation/NavigationStack";
import { StyleSheet, Text , TouchableOpacity, View} from "react-native";
import { PaperProvider, ActivityIndicator, FAB } from "react-native-paper";
import { PreferencesContext } from './src/context/PreferenceContext';
import { useTheme} from 'react-native-paper';
import { getTheme, storeTheme } from "./src/config/AsyncStorage";
import { DarkTheme, LightTheme } from "./src/theme/themeColor";
import { Animated } from 'react-native-reanimated';
import { BottomSheetModalProvider, useBottomSheetModal, BottomSheetModal } from "@gorhom/bottom-sheet";

const Welcome = ({setAppOpening, isLoading}) => {

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


  const [list, setList] = React.useState([]);
const [isThemeDark, setIsThemeDark] = React.useState(false);
const toggleTheme = React.useCallback(() => {
  setIsThemeDark(!isThemeDark);
  const newTheme = !isThemeDark;
  storeTheme(newTheme);
}, [isThemeDark]);
const fetchThemeData =async () => {
  try {
    const value =  await getTheme();
    if(value !== null) {
      setIsThemeDark(value);
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
    list,
  }),
  [toggleTheme, isThemeDark]
);

const [isLoading, setIsLoading] = React.useState(true);
const [appOpening, setAppOpening] = React.useState(true);



const bottomSheetRefModal = React.useRef(null)
const snapPoints = React.useMemo(() => ['25%', '50%'], []);
const [isBottomSheetOpen, setIsBottomSheetOpen] = React.useState(false);

  const HandlePresentModal =() => {
    bottomSheetRefModal.current.present()
    setIsBottomSheetOpen(true);
  }

  return (
          <GestureHandlerProvider>
      <PreferencesContext.Provider value={{ isThemeDark, toggleTheme}}>
        <PaperProvider theme={theme}>
          <BottomSheetModalProvider>
            {appOpening && <Welcome setAppOpening={setAppOpening} isLoading={isLoading}/>}
            { appOpening ? null :
              (
                <>
                  <StackScreen /> 
                  <FAB 
                      icon={isBottomSheetOpen ? "stretch-to-page-outline" : "close"}
                      size="large"
                      style={styles.buttonModal}
                      theme={theme}
                      onPress={HandlePresentModal}/>                 
                    <BottomSheetModal
                      ref={bottomSheetRefModal}
                      snapPoints={snapPoints}
                      index={0}
                    >
                        <View>
                            <Text> Bottom Sheet Modal</Text>
                        </View>
                    </BottomSheetModal>
                </>
              )
            }
            </BottomSheetModalProvider>

          </PaperProvider>
      </PreferencesContext.Provider>
      </GestureHandlerProvider>
  );
}

const styles = StyleSheet.create({
    buttonModal: {
      position:"absolute",
      bottom: 30,
      right: "37%",
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
