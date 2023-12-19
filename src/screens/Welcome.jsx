import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useC } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useTheme, Button } from 'react-native-paper';

const Welcome = ({setAppOpening}) => {


    const navigation = useNavigation();

    const navigateToHome = () => {
        navigation.navigate('Main');
    }

    const theme = useTheme();
    
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
            color: theme.colors.text,
        },
        title: {
            color: theme.colors.primary,
            fontSize: 40,
            fontWeight: 'bold',
            marginBottom: 10,
        }
    });



    return (
        <View style={styles.background}>
        <Text style={styles.title}>
                 Welcome sur l'application</Text>
            <TouchableOpacity
                onPress={()=> setAppOpening(false)}
                style={styles.button}

                >
                <Text style={styles.buttonText}>
                    Continue vers Home
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Welcome;