import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useTheme, ActivityIndicator} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HanddlingCards from '../components/Cards/HanddlingCards';
import CustomNavigationBar from '../components/CustomBarNavigation';
import CategoriesCards from '../components/Cards/CategoriesCards';
import SearchBar from '../components/SearchBar/SearchBar';
import { useDataSet } from '../context/DataContext';

const HomeScreen = () => {

    const [ isLoading, setIsLoading ] = React.useState(true);

    const { dataStore, theme } = useDataSet();
    // NAVIGATION
    const navigation = useNavigation();
    const navigateToSettings = () => {
        navigation.navigate('Settings');
    }
    const navigateToCategories = () => {
        navigation.navigate('Categories');
    }
    // STYLES
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
    const [searchQuery, setSearchQuery] = React.useState('');

    // FETCH DATA
    const [dataShow, setDataShow] = React.useState([]);
    const [error, setError] = React.useState();

    
    React.useEffect(() => {
        const dataFilter = ()=> {
            const newData =  dataStore.filter((item) => { 
                return item.name.toLowerCase().includes(searchQuery.toLowerCase());
              });
            if (searchQuery === "") {
                setDataShow(dataStore);
            }
            else {
                setDataShow(newData);
            }
            setIsLoading(false);
        }
        dataFilter();
    },[searchQuery]);

    return (
        <SafeAreaProvider>
            <CustomNavigationBar title="Accueil"/>
            <ScrollView style={styles.background}>
                <View>
                    <Text style={styles.title}>
                        Catégories:
                    </Text>
                    <View>
                        <CategoriesCards/>
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
                                dataShow.map((item,index) => (
                                    <HanddlingCards
                                        item={item}
                                        key={`home_${index}`}
                                        theme={theme}
                                    />
                                ))
                            )
                        }
                    </View>
                </View>
            </ScrollView>
            <SearchBar text={searchQuery} newText={setSearchQuery}/>
    </SafeAreaProvider>
    );
};

export default HomeScreen;

