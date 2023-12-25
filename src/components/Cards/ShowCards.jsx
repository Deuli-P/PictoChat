import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, useTheme } from 'react-native-paper'
import { useDataSet } from '../../context/DataContext'
import useList from '../../context/List/ListContext'


const ShowCards = ({item}) => {


  const { theme } = useDataSet();

  const { list } = useList();

  const length = list.length;
  
  const [ isDimensionsContainer, setIsDimensionsContainer ] = React.useState(null);
  const [ isDimensionsContent, setIsDimensionsContent ] = React.useState(null);

  React.useEffect(() => {
    console.log("[ShowCards] item ", list[item].cover);
    console.log("[ShowCards] lentgh ", list.length);
    if (length === 1) {
      setIsDimensionsContainer(300)
      setIsDimensionsContent(270)
    }
    if(length === 2) {
      setIsDimensionsContainer(185)
      setIsDimensionsContent(165)
    }
    else{
      setIsDimensionsContainer(160)
      setIsDimensionsContent(140)
    }
  },[length])


  const styles = StyleSheet.create({
    container:{
      width: isDimensionsContainer,
      height: isDimensionsContainer,
      margin: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      padding:10,
      backgroundColor: theme.colors.secondary,
    },
    image:{
      width: isDimensionsContent,
      height: isDimensionsContent,
      objectFit: 'cover',
    
    }
  })


  return (
    <Card style={styles.container}
      onPress={()=>console.log("click showCard")}
    >
      <Card.Cover source={{ uri: list[item].cover}} style={styles.image}/>
    </Card>
  )
}

export default ShowCards

