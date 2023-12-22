// HanddlingCard.jsx
import { StyleSheet } from 'react-native'
import React from 'react'
import { Card, useTheme } from 'react-native-paper';
import { PreferencesContext } from '../../context/PreferenceContext';

const HanddlingCards = ({item,theme}) => {
  // THEME pas transmis
  // const theme = useTheme();


  const [isSelect, setIsSelect] = React.useState(false);
  const context = React.useContext(PreferencesContext);

  const card = {
    "id": item.id,
    "cover": item.thumbnailUrl,
    "title": item.title,
  }

  React.useEffect(() => {
    console.log("[HanddlingCards] Card: ", card);
    console.log("[HanddlingCards] list: ", context.list);
  },[])

  function addList(e){
    if (context.list.length < 4) {
      context.listDispatch("add",e);
    }
  }
  
  function removeList(e){
    context.listDispatch("remove",e);
  }
  

  const handleSelect = (e) => {
    if (isSelect) {
      removeList(e);
    } else {
      addList(e);
      console.log("[HanddlingCards] addList: ", list);
    }
    setIsSelect(!isSelect);
};

React.useEffect(() => {
    console.log(`[HanddlingCards]Card ${item.id}:${isSelect}`);
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
