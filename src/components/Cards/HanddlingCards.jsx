// HanddlingCard.jsx
import { StyleSheet } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';
import { ThemeContext } from '../../context/ThemeContext';
import useList from '../../context/List/ListContext';

const HanddlingCards = ({item}) => {
  
  const { theme } = React.useContext(ThemeContext);
  const [ isSelect, setIsSelect ] = React.useState(false)


  const { list , addList, removeList } = useList();

  const card = {
    "id": item.id,
    "cover": item.thumbnailUrl,
    "title": item.title,
  }

  React.useEffect(() => {
    ItemNotSelected()
  },[list])

  const ItemNotSelected =()=>{
    if(list.length === 0){
      setIsSelect(false);
    }
  }
  
  
  
  const handleSelect = (e) => {
    if (!isSelect && list.length < 4) {
      addList(e);
      setIsSelect(true);
    } else {
      removeList(e);
      setIsSelect(false);
    }
    console.log("[HCards] STATE LIST LENGTH: ", list.length);
};

React.useEffect(() => {
    console.log(`[HCards]Card ${item.id}:${isSelect}`);
  },[isSelect])

  const styles = StyleSheet.create({
    containerSelected:{
      width: 85,
      height: 85,
      borderRadius: 10,
      opacity: 0.7,
      justifyContent: 'center',
      alignItems: 'center',
      margin:3,
    },
    containerUnSelected:{
      width: 85,
      height: 85,
      borderRadius: 10,
      opacity: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 3,
    },
    image: {
      width: 75,
      height: 75,
      objectFit: 'cover',
    }
  })

  return (
    <Card 
      style={isSelect ? styles.containerSelected : styles.containerUnSelected}
      id={item.id}
      onPress={()=>handleSelect(card)}>
        <Card.Cover source={{uri:item.thumbnailUrl}} alt={item.title} style={styles.image}/>
    </Card>
  )
}

export default HanddlingCards;
