import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useTheme, Button, Appbar } from 'react-native-paper';
import CustomNavigationBar from '../components/CustomBarNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const HomeScreen = () => {

    
    const navigation = useNavigation();
    
    const navigateToSettings = () => {
        navigation.navigate('Settings');
    }
    const navigateToCategories = () => {
        navigation.navigate('Categories');
        // navigation.navigate('CategorieScreen', {title: item.title, id: item.id, image:item.image});

    }
    const navigateToCategorieStack = () => {
        navigation.navigate('CategorieStack');
        // navigation.navigate('CategorieScreen', {title: item.title, id: item.id, image:item.image});

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
    <SafeAreaProvider>
        <Appbar.Header elevated>
            <Appbar.Content title="Accueil" />
        </Appbar.Header>
        <View style={styles.background}>
             <Text style={styles.title}>
                Home Screen
                </Text>
            <Text style={styles.text}>
                </Text>
                <Button 
                    mode='contained'
                    onPress={()=> navigateToSettings()}
                    style={styles.button}
                >
                        Go to Settings
                </Button>
                <Button 
                    mode='contained'
                    onPress={()=> navigateToCategorieStack()}
                    style={styles.button}
                >
                        CategorieStack
                </Button>
                <Button 
                    mode='contained'
                    onPress={()=> navigateToCategories()}
                    style={styles.button}
                >
                        Categories
                </Button>
                
        </View>
    </SafeAreaProvider>
    );


};


export default HomeScreen;
