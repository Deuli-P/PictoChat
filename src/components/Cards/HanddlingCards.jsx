// HanddlingCard.jsx
import { StyleSheet } from 'react-native'
import React from 'react'
import { Card, Icon } from 'react-native-paper';
import { useDataSet } from '../../context/DataContext';
import useList from '../../context/List/ListContext';

const HanddlingCards = ({item}) => {
  
  const { theme } = useDataSet();
  const [ isSelect, setIsSelect ] = React.useState(false)
  const [ alreadyInList, setAlreadyInList ] = React.useState(false)


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
  
  // Si objet déjà dans liste alors X d'error pendant 1500ms par dessus du cover


  const handleSelect = (e) => {
    if (!isSelect && list.length < 4) {
        addList(e);
        setIsSelect(true);
        setAlreadyInList(false);
    } else {
      removeList(e);
      setIsSelect(false);
    }
    console.log("[HCards] STATE LIST LENGTH: ", list.length);
};


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
      position: 'relative',
    },
    image: {
      width: 75,
      height: 75,
      objectFit: 'cover',
    },
  })


  React.useEffect(() => {
    if( list.find((currentItem) => currentItem.title === item.title)){
      setIsSelect(true);
    }
  },[list])

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
