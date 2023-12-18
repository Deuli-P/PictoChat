import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import React from 'react'


const ModalButton = () => {

    
  return (
    <IconButton 
        icon="resize"
        size={60}
        style={styles.container}
    >
    </IconButton>
  )
}

export default ModalButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        position:"absolute",
        bottom: 20,
        right: "36%",
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 0.8,
        shadowRadius: 10,

    },
    text: {},
})