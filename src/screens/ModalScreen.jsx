import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { CustomNavigationBar} from '../components/CustomBarNavigation';

const ModalScreen = () => {
    return (
        <View>
            <CustomNavigationBar /> 
            <Text> Modal</Text>
        </View>
    );
};

export default ModalScreen;