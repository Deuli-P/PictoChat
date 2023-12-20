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
import { Animated } from "react-native-reanimated";
import {
  BottomSheetModalProvider,
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetHandle
} from "@gorhom/bottom-sheet";
import ShowCards from "./src/components/Cards/ShowCards";

const Welcome = ({ setAppOpening, isLoading }) => {
  // STYLES
  const theme = useTheme();
  const styles = StyleSheet.create({
    button: {
      backgroundColor: theme.colors.primary,
      paddingHorizontal: 48,
      paddingVertical: 16,
      borderRadius: 10,
      marginTop: 10,
      color: theme.colors.text,
    },
    buttonText: {
      fontSize: 36,
      color: "white",
    },
    background: {
      backgroundColor: theme.colors.background,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      color: theme.colors.text,
    },
    text: {
      color: theme.colors.text,
    },
    title: {
      color: theme.colors.primary,
      fontSize: 40,
      fontWeight: "bold",
      marginBottom: 10,
    },
    loader: {
      color: theme.colors.primary,
      marginTop: 30,
      transform: [{ scale: 2 }],
    },
  });

  return (
    <SafeAreaProvider style={styles.background}>
      <Text style={styles.title}>Welcome</Text>
      {isLoading ? (
        <ActivityIndicator size="large" style={styles.loader} />
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={() => setAppOpening(false)}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      )}
    </SafeAreaProvider>
  );
};

export default function App() {


  const { list , removeList } = React.useContext(PreferencesContext);
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
    console.log("[APP]APP STARTED:", list);
    fetchThemeData();
  }, []);
  const theme = isThemeDark ? DarkTheme : LightTheme;
  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
      list,
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
  const bottomSheetRefModal = React.useRef(null);
  const snapPoints = React.useMemo(() => ["80%", "95%"], []);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = React.useState(false);
  const HandlePresentModal = () => {
    bottomSheetRefModal.current.present();
    setIsBottomSheetOpen(true);
  };
  const renderBackdrop = React.useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={2}
        opacity={0.7}
        color={theme.colors.backdrop}
      />
    ),
    []
  );
  const renderHandledrop = React.useCallback(
    props => (
      <BottomSheetHandle
        {...props}
        opacity={0.7}
        color={theme.colors.background}
        style={{ transform: [{ scaleX: 3 }]}}
      />
    ),
    []
  );



  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PreferencesContext.Provider value={{ isThemeDark, toggleTheme }}>
          <PaperProvider theme={theme}>
            <BottomSheetModalProvider>
              {appOpening && (
                <Welcome setAppOpening={setAppOpening} isLoading={isLoading} />
              )}
              {appOpening ? null : (
                <>
                  <StackScreen />
                  <BottomSheetModal
                    ref={bottomSheetRefModal}
                    snapPoints={snapPoints}
                    index={0}
                    style={styles.ModalWindow}
                    backgroundStyle={{
                      backgroundColor: theme.colors.ModalWindow,
                    }}
                    backdropComponent={renderBackdrop}
                    handleComponent={renderHandledrop}
                  >
                    <View style={styles.background}>
                      <View style={ list?.length >2 ? styles.listContainerBig : styles.listContainerLittle} >
                        {list?.map((item, index) => (
                          <ShowCards 
                          key={index}
                          item={index}
                          id={index}
                          setlist={setList}
                          lenght={list.length}
                          list = {list}
                          handleRemove={removeList(item)}
                          />
                        ))
                        }
                      </View>
                      <FAB
                        icon="close"
                        onPress={() => bottomSheetRefModal.current.close()}
                        style={styles.buttonModalClose}
                        theme={theme}
                      />
                    </View>
                  </BottomSheetModal>
                  <FAB
                    icon={
                      isBottomSheetOpen ? "stretch-to-page-outline" : "close"
                    }
                    size="large"
                    style={styles.buttonModalOpen}
                    theme={theme}
                    onPress={HandlePresentModal}
                  />
                </>
              )}
            </BottomSheetModalProvider>
          </PaperProvider>
        </PreferencesContext.Provider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
