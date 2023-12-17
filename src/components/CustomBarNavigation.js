import { Appbar, useTheme } from 'react-native-paper';
import React from 'react';

export default function CustomNavigationBar({title}) {



  const { theme } = useTheme();

  return (
    <Appbar.Header style={{backgroundColor: "blue",}} elevated >
      {/* {navigation.canGoBack() ? <Appbar.BackAction onPress={navigation.goBack} /> : null} */}
      <Appbar.Content title={title} />
        <Appbar.Action icon="magnify" onPress={() => {console.log("Hello");}} />
    </Appbar.Header>
  );
}