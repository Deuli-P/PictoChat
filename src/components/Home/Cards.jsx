import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Cards = () => {
    const navigation = useNavigation();

    const navigateToCategories = (item) => {
        navigation.navigate('Categories', { id: item.id , title: item.title, image: item.image});
    }
  return (
    <TouchableOpacity 
        onPress={(e)=> navigateToCategories(e)}>
      <Text>Cards</Text>
    </TouchableOpacity>
  )
}

export default Cards

const styles = StyleSheet.create({})