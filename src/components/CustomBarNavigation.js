import { Appbar, useTheme, Badge } from 'react-native-paper';
import { View } from 'react-native';
import React from 'react';

export default function CustomNavigationBar({props}) {

  const [back, isBack] = React.useState(false)

  React.useEffect(() => {
    if (navigation.location === 'Home'){
      isBack(false)
    }
    else {
      isBack(true)
    }
  },[navigation])

  const { headerTitle } =  props

  const { theme } = useTheme();

  return (
    <Appbar.Header elevated>
        {back ? <Appbar.BackAction onPress={() => navigation.goBack()} /> : null}
        <Appbar.Content title={headerTitle} />
        <View style={{position:"relative", marginRight:40, marginTop:10, width:30,height:30, justifyContent:"center", alignItems:"center"}}>
            {count.length > 0 && (
                    <>
                        <Appbar.Action icon="trash-can" onPress={() => {setCount([]);}} size={30} />
                        <Badge style={{position: "absolute", top:-15,right:-15}} size={24}>{count.length <=3 ? (count.length): ("max")}</Badge>
                    </>
                    )}
                </View>
    </Appbar.Header>
  );
}