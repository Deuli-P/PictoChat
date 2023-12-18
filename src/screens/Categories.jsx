import React from 'react';
import { View, Text } from 'react-native';
import { Appbar, Badge, Button, Icon } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import App from '../../App';

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
            <Appbar.Header elevated>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Categories" />
                <View style={{position:"relative", marginRight:40, marginTop:10, width:30,height:30, justifyContent:"center", alignItems:"center"}}>
                    {count.length > 0 && (
                            <>
                                <Appbar.Action icon="trash-can" onPress={() => {setCount([]);}} size={30} />
                                <Badge style={{position: "absolute", top:-15,right:-15}} size={24}>{count.length <=3 ? (count.length): ("max")}</Badge>
                            </>
                            )}
                        </View>
            </Appbar.Header>
        <View>
            <Text>Categories</Text>
            <Button onPress={()=> addCount()}>
                Add Count
            </Button>
            <Text 
            > Count : {count.length}
            </Text>
            <Button onPress={()=> navigation.navigate("Modal")}>
                <Icon source= "resize" />
            </Button>
        </View>
        </SafeAreaProvider>
    );
};

export default Categories;