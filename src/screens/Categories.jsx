import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useRoute } from "@react-navigation/native";
import CustomNavigationBar from '../components/CustomBarNavigation';
import useList from '../context/List/ListContext';
import HanddlingCards from '../components/Cards/HanddlingCards';
import { ThemeContext } from '../context/ThemeContext';
import { Icon } from 'react-native-paper';

const Categories = () => {

    const [ isLoading, setIsLoading ] = React.useState(true);

    // ROUTE
    const route = useRoute();
    const titleCat = route.params.title;
    const idCat = route.params.id;
    const dataFetch = route.params.data;
    
    
    //STYLES
    const { theme } = React.useContext(ThemeContext);
    const styles = StyleSheet.create({
        text: {
            color: theme.colors.onError,
            fontSize: 20,
            marginBottom: 5,
        },
        textCategorie: {
            color: theme.colors.onError,
            fontSize: 30,
            marginBottom: 20,
            fontWeight: 'bold',
        },
        view: {
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: 30,
        },
        icon:{
        },
        error:{
            marginTop:70,
            backgroundColor: theme.colors.error,
            padding: 20,
            marginHorizontal: 10,
            alignItems: 'center',
            borderRadius: 10,
            shadowOffset: {
                width: 5,
                height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 2,
            shadowColor: theme.colors.onBackground,
        }
    });

    // FILTER
    const [ filteredList, setFilteredList ] = React.useState([]);
    React.useEffect(() => {
        const Filter =  async() => {
            try{
                const newList = await dataFetch.filter((item) => item.albumId === idCat);
                console.log("[Categories] Filtré");
                setFilteredList(newList);
                setIsLoading(false);
            }
            catch(error){
                console.log("[Categories] Erreur de filtrage");
                setIsLoading(true);
            }
        }
        Filter();
        console.log(`[Categories] FilterList length ${titleCat}:`, filteredList.length);
    }, [isLoading]);

    return (
        <SafeAreaProvider>
            <CustomNavigationBar title={titleCat ? titleCat : `Catégories`} />
            <ScrollView>
                 {isLoading || filteredList < 1 ? 
                    (
                        <View style={styles.error}>
                            <Text style={styles.text}>Aucune image dans la catégorie:</Text>
                            <Text style={styles.textCategorie}>{titleCat}</Text>
                            <Icon source="emoticon-sad-outline" size={60} color={theme.colors.onError} style={styles.icon} />
                        </View>
                    ) 
                 :
                 (
                    <View style={styles.view}>
                        {filteredList.map((item) => (
                            <HanddlingCards
                                item={item}
                                key={item.id}
                                theme={theme}
                                />
                        ))}
                    </View>
                )
                }
            </ScrollView>
        </SafeAreaProvider>
    );
};

export default Categories;