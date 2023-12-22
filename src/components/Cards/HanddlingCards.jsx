// HanddlingCard.jsx
import { StyleSheet } from 'react-native'
import React from 'react'
import { Card, useTheme } from 'react-native-paper';
import { PreferencesContext } from '../../context/PreferenceContext';

const HanddlingCards = ({item}) => {
  // THEME pas transmis
  const theme = useTheme();


  const [isSelect, setIsSelect] = React.useState(false);
  const context = React.useContext(PreferencesContext);

  const card = {
    id: item.id,
    cover: item.thumbnailUrl,
    title: item.title,
  }

  React.useEffect(() => {
    console.log("[HanddlingCards] list: ", context.list);
  },[])

  function addList(e){
    if (context.list.length < 4) {
      context.listDispatch({type: 'add', playload: e });
      if(context.list.length < 1){
        console.log("[HanddlingCards] Rien a été ajouté");
        return
      }
      else{
        console.log("[HanddlingCards] remove: ", context.list.length);
        setIsSelect(true);
      }
    }
  }
  
  function removeList(e){
    if(context.list.length > 0){
      context.listDispatch({type:"remove",playload:e});
      console.log("[HanddlingCards] addList: ", context.list.length);
    }
    else{
      console.log("[HanddlingCards] List est vide ");
    }
    setIsSelect(false);
  }
  
  const handleSelect = (e) => {
    console.log("[HanddlingCards]Id object select:", e.id);
    if (isSelect) {
      removeList(e);
    } else {
      addList(e);
    }
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
      theme={theme}
      style={isSelect ? styles.containerSelected : styles.containerUnSelected}
      id={item.id}
      onPress={()=>handleSelect(card)}
      >
        <Card.Cover source={{uri:item.thumbnailUrl}} alt={item.title} style={styles.image}/>
    </Card>
  )
}

export default HanddlingCards;
