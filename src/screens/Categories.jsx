import React from 'react';
import { View, Text } from 'react-native';
import { Appbar, Badge, Button, Icon } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import CustomNavigationBar from '../components/CustomBarNavigation';

const Categories = ({navigation }) => {



    const route = useRoute();

     useEffect(()=>{
     },[]);

    const [count,setCount] = useState([])
    const [showError, setShowError] = useState(false);

    // const imageUri = route.params.image;
    // const titleCat = route.params.title;
    // const idCat = route.params.id;

    const addCount = () => {
        if(count.length < 4){
            const nouveauTableau = [...count, 1];
            setCount(nouveauTableau);
        }
    }

    return (
        <SafeAreaProvider>
            <CustomNavigationBar title={`${titleCat} || Catégories`} />
            <View>
                <Text>Categories</Text>
                <Button onPress={()=> addCount()}>
                    Add Count
                </Button>
                <Text 
                > Count : {count.length}
                </Text>
            </View>
        </SafeAreaProvider>
    );
};

export default Categories;