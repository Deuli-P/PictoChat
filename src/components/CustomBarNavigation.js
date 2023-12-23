import { Appbar, useTheme, Badge } from 'react-native-paper';
import { View } from 'react-native';
import React from 'react';
import useList from '../context/List/ListContext';
import { useNavigation } from '@react-navigation/native';

export default function CustomNavigationBar({title, route, props}) {

  const { list, clearList } = useList();

  const navigation = useNavigation();

  const [ back, isBack ] = React.useState(false)

  React.useEffect(() => {
    if (title === 'Accueil' || title === 'Paramêtres' ){
      isBack(false)
    }
    else {
      isBack(true)
    }
  },[route])

  const { theme } = useTheme();

  return (
    <Appbar.Header elevated>
        {back ? <Appbar.BackAction onPress={() => navigation.navigate('Home')} /> : null}
        <Appbar.Content title={title} />
        <View style={{position:"relative", marginRight:40, marginTop:10, width:30,height:30, justifyContent:"center", alignItems:"center"}}>
            {list.length > 0 && (
                    <>
                        <Appbar.Action icon="trash-can" onPress={() => {clearList()}} size={30} />
                        <Badge style={{position: "absolute", top:-15,right:-15}} size={24}>{list.length <=3 ? (list.length): ("max")}</Badge>
                    </>
                    )}
                </View>
    </Appbar.Header>
  );
}