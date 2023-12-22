import { useTheme } from "react-native-paper";
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";


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
  
    export default Welcome;