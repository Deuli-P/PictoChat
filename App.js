import { GestureHandlerRootView } from "react-native-gesture-handler";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StackScreen } from "./src/Navigation/NavigationStack";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  PaperProvider,
  ActivityIndicator,
  FAB,
  Card,
} from "react-native-paper";
import { PreferencesContext } from "./src/context/PreferenceContext";
import { useTheme } from "react-native-paper";
import { getTheme, storeTheme } from "./src/config/AsyncStorage";
import { DarkTheme, LightTheme } from "./src/theme/themeColor";
import Welcome from "./src/screens/Welcome";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import BottomSheetModalComponent from "./src/components/Modal/BottomSheetModal";


const initialState = []
const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.item]
    case 'remove':
      return state.filter((item) => item.id !== action.id)
    case 'clear':
      return initialState
    default:
      return state
  }
}


export default function App() {

  const [list, listDispatch] = React.useReducer(reducer, initialState)
  
  // THEME
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  const toggleTheme = React.useCallback(() => {
    setIsThemeDark(!isThemeDark);
    const newTheme = !isThemeDark;
    storeTheme(newTheme);
  }, [isThemeDark]);

  const fetchThemeData = async () => {
    try {
      const value = await getTheme();
      if (value !== null) {
        setIsThemeDark(value);
      }
    } catch (e) {
      alert("[APP] Fetch", e);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  };
  React.useEffect(() => {
    console.log("[APP]START list:", list);
    fetchThemeData();
  }, []);
  const theme = isThemeDark ? DarkTheme : LightTheme;
  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
      list,
      listDispatch,
    }),
    [toggleTheme, isThemeDark]
  );

  const styles = StyleSheet.create({
    buttonModalOpen: {
      position: "absolute",
      bottom: 10,
      right: "37%",
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonModalClose: {
      position: "absolute",
      top: 420,
      width: 70,
      height: 70,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
    },
    background: {
      backgroundColor: theme.colors.background,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
    listContainerLittle: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      flexWrap: "wrap",
      flex: 1,
      marginVertical: 10,
    },
    listContainerBig: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      flexWrap: "wrap",
      flex: 1,
      marginVertical: 40,
    },
    ModalWindow: {
      backgroundColor: theme.colors.onBackground,
      width: "100%",
      borderRadius: 30,
      shadowColor: theme.colors.shadow,
      shadowOffset: {
        width: 0,
        height: -10,
      },
      shadowOpacity: 0.4,
      shadowRadius: 5,
      color: theme.colors.background,
    },
  });

  const [isLoading, setIsLoading] = React.useState(true);
  const [appOpening, setAppOpening] = React.useState(true);

  // BOTTOM SHEET
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PreferencesContext.Provider value={preferences}>
          <PaperProvider theme={theme}>
            <BottomSheetModalProvider theme={theme}>
              {appOpening && (
                <Welcome setAppOpening={setAppOpening} isLoading={isLoading} />
              )}
              {appOpening ? null : (
                <>
                  <StackScreen />
                  <BottomSheetModalComponent theme={theme}/>
                </>
              )}
            </BottomSheetModalProvider>
          </PaperProvider>
        </PreferencesContext.Provider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
