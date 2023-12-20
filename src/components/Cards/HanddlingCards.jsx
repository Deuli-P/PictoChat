import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Card, useTheme } from 'react-native-paper';
import { PreferencesContext } from '../../context/PreferenceContext';

const HanddlingCards = ({item}) => {

  const { theme} = useTheme();
  const [ isSelect, setIsSelect ] = React.useState(false);
  const { addList, removeList } = React.useContext(PreferencesContext)

  const card = {
    "id": item.id,
    "cover": item.thumbnailUrl,
    "title": item.title,
  }

  const handleSelect = () => {
    if (isSelect) {
        removeList(card);
    } else {
        addList(card);
    }
    setIsSelect(!isSelect);
};

React.useEffect(() => {
    console.log('[HanddlingCards] isSelect: ', isSelect);
    console.log('[HanddlingCards] id: ', item.id);
  },[isSelect])


  const styles = StyleSheet.create({
    containerSelected:{
      width: 150,
      height: 150,
      margin: 10,
      borderRadius: 10,
      opacity: 0.7,
    },
    containerUnSelected:{
      width: 150,
      height: 150,
      margin: 10,
      borderRadius: 10,
      opacity: 1,
    },
  })

  return (
    <Card 
      style={isSelect ? styles.containerSelected : styles.containerUnSelected}
      id={item.id}
      onPress={()=>handleSelect()}>
        <Card.Cover source={{uri:item.thumbnailUrl}} alt={item.title}/>
    </Card>
  )
}

export default HanddlingCards;

const styles = StyleSheet.create({})