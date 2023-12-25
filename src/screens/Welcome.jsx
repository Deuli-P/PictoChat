import { useTheme } from "react-native-paper";
import React from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useDataSet } from "../context/DataContext";

const Welcome = ({ setAppOpening }) => {

  
  const { isLoading } = useDataSet();
  
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
      image:{
        width: 200,
        height: 200,
        marginVertical: 10,
      },
      titleContainer:{
        flexDirection: 'row',
      },
      titleStart:{
        color: '#E63B1F',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      titleEnd:{
        color: "#0692BC",
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
      }

    });
  
    return (
      <SafeAreaProvider style={styles.background}>
        <Text style={styles.title}>Welcome on</Text>
        <Image source={require("../../assets/icons/app/Logo-Gepalemo_icon.png")} style={styles.image} alt="Logo de l'application"/>
        <View style={styles.titleContainer}>
        <Text style={styles.titleStart}>Picto</Text>
        <Text style={styles.titleEnd}>Chat</Text>
        </View>
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
  
    export default Welcome;