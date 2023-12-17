import { View, Text, TouchableOpacity, StyleSheet, useColorScheme,  } from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { useTheme, Button, Switch, Appbar } from 'react-native-paper';
import { PreferencesContext } from '../context/PreferenceContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const SettingsScreen = ({navigation}) => {


    const theme = useTheme();

  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);
    
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
            <Appbar.Header elevated>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Paramêtres" />
            </Appbar.Header>
            <View style={styles.background}>
                <Text style={styles.title}>
                    Settings Screen
                </Text>
                <View style={{ flexDirection: "row",justifyContent: "center", alignItems: "center"}}>
                    <Text style={styles.text}>
                        Siwtch theme:
                    </Text>
                    <Switch 
                    onValueChange={toggleTheme}
                    theme={{ colors: { primary: theme.colors.primary } }}
                    value={isThemeDark}
                >
                </Switch>
                </View>
            </View>
        </SafeAreaProvider>
    );
};

export default SettingsScreen;