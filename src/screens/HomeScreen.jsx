import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useTheme, Button, Appbar, Portal, ActivityIndicator} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { fetchingData } from '../config/Axios';
import HanddlingCards from '../components/Cards/HanddlingCards';
import CustomNavigationBar from '../components/CustomBarNavigation';

const HomeScreen = () => {
    // NAVIGATION
    const navigation = useNavigation();
    const navigateToSettings = () => {
        navigation.navigate('Settings');
    }
    const navigateToCategories = () => {
        navigation.navigate('Categories');
    }
    // STYLES
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
            flex: 1,
        },
        text: {
            color: theme.colors.onBackground,
        },
        title: {
            color: theme.colors.primary,
            fontSize: 40,
            fontWeight: 'bold',
            marginBottom: 10,
            paddingHorizontal: 10,
        }
    });

    // FETCH DATA
    const [dataFetch, setDataFetch] = React.useState();
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState();

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchingData();
                setDataFetch(data);
                console.log('[HomeScreen] dataFetch: ok');
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(true);
            }
        };
        fetchData();
    }, []);


    return (
        <SafeAreaProvider>
            <CustomNavigationBar title="Accueil"/>
            <ScrollView style={styles.background}>
                <View>
                    <Text style={styles.title}>
                        Catégories:
                    </Text>
                    <View>
                        <Text style={styles.text}> Ici des Categories en carrousel</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.title}>
                        Derniers articles:
                    </Text>
                    <View style={{flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent:"center", alignItems:"center",width: "100%",height: "100%"}}>
                        {error && <Text style={{color: theme.colors.error, backgroundColor: theme.colors.errorContainer}}>Une erreur est survenue</Text>}
                        {isLoading ?
                            (<ActivityIndicator size="large" style={{color: "blue"}} />)
                            :
                            (
                                dataFetch.map((item) => (
                                    <HanddlingCards
                                        item={item}
                                        key={item.id}
                                        theme={theme}
                                    />
                                ))
                            )
                        }
                    </View>
                </View>
            </ScrollView>
    </SafeAreaProvider>
    );
};

export default HomeScreen;

