import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { Switch } from 'react-native-paper';
import { ThemeContext } from '../context/ThemeContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import  CustomNavigationBar  from '../components/CustomBarNavigation';

const SettingsScreen = ({navigation, route}) => {



  const { toggleTheme, isThemeDark, theme } = React.useContext(ThemeContext);
    
    const styles = StyleSheet.create({
        button: {
            backgroundColor: theme.colors.primary,
            paddingHorizontal: 24,
            paddingVertical: 16 ,
            borderRadius: 10,
            marginTop: 10,
            color: theme.colors.text,
        },
        buttonText: {
            color: 'white',
        },
        background: {
            backgroundColor: theme.colors.background,
            justifyContent: "center",
            alignItems:"center",
            flex: 1,
        },
        text: {
            color: theme.colors.secondary,
            marginRight: 10,
        },
        title: {
            color: theme.colors.primary,
            fontSize: 40,
            fontWeight: 'bold',
            marginBottom: 10,
        }
    });


    return (
        <SafeAreaProvider>
            <CustomNavigationBar title="Paramêtres" />
            <View style={styles.background}>
                <Text style={styles.title}>
                    Settings Screen
                </Text>
                <View style={{ flexDirection: "row",justifyContent: "center", alignItems: "center"}}>
                    <Text style={styles.buttonText}>
                        Siwtch theme:
                    </Text>
                    <Switch 
                    onValueChange={toggleTheme}
                    theme={{ colors: { primary: theme.colors.primary } }}
                    value={isThemeDark}
                >
                </Switch>
                </View>
                    <Text style={styles.text}>Photos provided by Pexels</Text>
            </View>
        </SafeAreaProvider>
    );
};

export default SettingsScreen;