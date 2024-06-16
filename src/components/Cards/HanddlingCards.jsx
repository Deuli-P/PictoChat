// HanddlingCard.jsx
import { StyleSheet, Image } from 'react-native'
import { useState, useEffect } from 'react'
import { Badge, Card, Icon } from 'react-native-paper';
import { useDataSet } from '../../context/DataContext';
import useList from '../../context/List/ListContext';

const HanddlingCards = ({item}) => {
  
  const { theme } = useDataSet();
  const [ isSelect, setIsSelect ] = useState(false)
  const [ alreadyInList, setAlreadyInList ] = useState(false)


  const { list , addList, removeList } = useList();

  const card = {
    "id": item.id,
    "base64": item.base64,
    "name": item.name,
  }

  useEffect(() => {
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
        addList(e.id);
        setIsSelect(true);
        setAlreadyInList(false);
    } else {
      removeList(e.id);
      setIsSelect(false);
    }
};

const image =  `data:image/png;base64,${item.base64}`

  const styles = StyleSheet.create({
    containerSelected:{
      width: 85,
      height: 85,
      borderRadius: 10,
      opacity: 0.7,
      backgroundColor: theme.colors.primary,
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
      width: 68,
      height: 68,
      objectFit: 'cover',
    },
    check:{
      position: 'absolute',
      bottom: 3,
      right: 3,
      zIndex: 10,
      backgroundColor: theme.colors.background,
      borderRadius: 50,
    }
  })


  useEffect(() => {
    if( list.find((currentItem) => currentItem.id === item.id)){
      setIsSelect(true);
    }
  },[list])

  return (
    <Card 
      style={isSelect ? styles.containerSelected : styles.containerUnSelected}
      id={item.id}
      onPress={()=>handleSelect(card)}>
         <Card.Cover source={{uri:image}} alt={item.title} style={styles.image}/>
    </Card>
  )
}

export default HanddlingCards;
