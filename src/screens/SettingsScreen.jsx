import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { Switch } from 'react-native-paper';
import { useDataSet } from '../context/DataContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import  CustomNavigationBar  from '../components/CustomBarNavigation';
import SelectLanguage from '../components/Language/SelectLanguage';

const SettingsScreen = ({navigation, route}) => {


  const { toggleTheme, isThemeDark, theme } = useDataSet();
    
    const styles = StyleSheet.create({
        button: {
            backgroundColor: theme.colors.primary,
            paddingHorizontal: 24,
            paddingVertical: 16 ,
            borderRadius: 10,
            marginTop: 10,
            color: theme.colors.text,
            width: "100%",
            height: "90%",
            flexDirection: "column",
            alignItems: "center",
        },
        buttonText: {
            color: 'white',
        },
        background: {
            backgroundColor: theme.colors.background,
            alignItems:"center",
            marginTop: 50,
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
        },
        selectContainer:{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal:15,
            width:  "100%",
        },
        label:{
            marginBottom: "10%",
            paddingHorizontal: 10,
            color: theme.colors.onBackground,
        },
        containerElement:{
            height: 100,
            width: 100,
        },
        containerElementSwitch:{
            height: 50,
            width: 100,
            alignItems: "flex-end",
            marginRight: 30,
        },
    });

    return (
        <SafeAreaProvider>
            <CustomNavigationBar title="Paramêtres" />
            <View style={styles.background}>
                <View style={styles.selectContainer}>
                        <Text style={styles.label}>Siwtch theme:</Text>
                        <View style={styles.containerElementSwitch}>
                            <Switch 
                                onValueChange={toggleTheme}
                                theme={{ colors: { primary: theme.colors.primary}}}
                                value={isThemeDark}>
                            </Switch>
                    </View>
                </View>
                <View style={styles.selectContainer}>
                    <Text style={styles.label}>Choisi ta langue:</Text>
                    <View style={styles.containerElement}>
                        <SelectLanguage />
                    </View>
                </View>
            </View>
                <View style={{alignItems:"center", marginBottom: 50,}} >
                    <Text style={styles.text}>Images provided by Faticon.com</Text>
                </View>
        </SafeAreaProvider>
    );
};

export default SettingsScreen;