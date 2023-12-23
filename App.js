import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StackScreen } from "./src/Navigation/NavigationStack";
import {  StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import { ThemeProvider, ThemeContext} from "./src/context/ThemeContext";
import Welcome from "./src/screens/Welcome";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import BottomSheetModalComponent from "./src/components/Modal/BottomSheetModal";
import { ListProvider } from "./src/context/List/ListContext";


export default App = () => {

  return(
    <SafeAreaProvider>
      <ThemeProvider>
        <ListProvider>
          <Main />
        </ListProvider>
       </ThemeProvider>
    </SafeAreaProvider>
  )
}

function Main({}) {
  // THEME
  const { isThemeDark, toggleTheme, theme } = React.useContext(ThemeContext);


  // A remettre en True quand l'application est finie pour afficher Welcome
  const [appOpening, setAppOpening] = React.useState(false);




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
      backgroundColor: "darkgrey",
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
      backgroundColor: "white",
      width: "100%",
      borderRadius: 30,
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: -10,
      },
      shadowOpacity: 0.4,
      shadowRadius: 5,
      color: "black",
    },
  });


  // BOTTOM SHEET
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
          <PaperProvider theme={theme}>
            <BottomSheetModalProvider >
              {appOpening && (
                <Welcome setAppOpening={setAppOpening} />
              )}
              {appOpening ? null : (
                <>
                  <StackScreen />
                  <BottomSheetModalComponent />
                </>
              )}
            </BottomSheetModalProvider>
          </PaperProvider>
      </GestureHandlerRootView>
  );
}
