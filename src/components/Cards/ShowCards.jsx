import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, useTheme } from 'react-native-paper'
import { PreferencesContext } from '../../context/PreferenceContext'


const ShowCards = ({item,setList,length, handleRemove}) => {

  const { removeList } = React.useContext(PreferencesContext)

  const { theme } = useTheme();
  const [ isDimensions, setIsDimensions ] = React.useState(null);

  React.useEffect(() => {
    if (length === 1) {
      setIsDimensions(300)
    }
    if(length === 2) {
      setIsDimensions(185)
    }
    else{
      setIsDimensions(160)
    }
  },[length, isDimensions])


  const styles = StyleSheet.create({
    container:{
      width: isDimensions,
      height: isDimensions,
      margin: 10,
      borderRadius: 10,
    },
  })


  return (
    <Card style={styles.container} theme={theme}

      onPress={handleRemove}
    >
      <Card.Content>
        <Text>{item}</Text>
      </Card.Content>
    </Card>
  )
}

export default ShowCards

