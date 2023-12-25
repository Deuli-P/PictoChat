import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import { useDataSet } from '../../context/DataContext';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const CategoriesCards = ({item, route, dataFetch}) => {

const navigation = useNavigation();

  const categoriesData = 
                    [
                      {
                          "CategorieId": 1,
                          "title": "Transport",
                          "cover": require("../../../assets/icons/categories/transportation.png")
                      },
                      {
                          "CategorieId": 2,
                          "title": "Pratique",
                          "cover": require("../../../assets/icons/categories/hand.png")
                          
                      },
                      {
                          "CategorieId": 3,
                          "title": "Hebergement",
                          "cover": require("../../../assets/icons/categories/bedroom.png")
                          
                      },
                      {
                          "CategorieId": 4,
                          "title": "Nourriture",
                          "cover": require("../../../assets/icons/categories/diet.png")
                          
                      },
                      {
                          "CategorieId": 5,
                          "title": "Loisir",
                          "cover": require("../../../assets/icons/categories/hobbies.png")
                      }
                    ]

  const { theme } = useDataSet()

  const handletoCategories = (item) => {
    navigation.navigate("Categories",
      { title: item.title, image: item.cover, id: item.CategorieId, data : dataFetch}
    );
  }

  const styles = StyleSheet.create({
    card: {
      width: 150,
      height: 150,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      padding:3,
      backgroundColor: theme.colors.onSecondary,
      shadowColor: theme.colors.secondary,
      shadowOpacity: 0.3,
      shadowRadius: 4,
      shadowOffset: {
        height: -2,
        width: 1,
      },
    },
    image: {
      width: 140,
      height: 140,
      objectFit: 'cover',
    },
    container:{
      width: 150,
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
      margin:10,
    },
    text:{
      color: theme.colors.primary,
      marginVertical: 5,
    }
  })





  const renderItem=({item}) => {
    return (
        <TouchableOpacity 
          onPress={()=> handletoCategories(item)}
          style={styles.container}
        >
          <Card  style={styles.card}>
            <Card.Cover source={item.cover} style={styles.image} alt={`Icon de ${item.title}`}/>
          </Card>
          <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
    )
  }
  return (
    <FlatList
      data={categoriesData}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={(item) => {"catCard_"+item.id}}
    />
  )
}

export default CategoriesCards
