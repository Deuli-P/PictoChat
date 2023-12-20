import { StyleSheet } from "react-native";
import { useTheme} from 'react-native-paper';

const theme = useTheme();

const styles = StyleSheet.create({

    button: {
        backgroundColor: theme.colors.primary,
        paddingHorizontal: 24,
        paddingVertical: 16 ,
        borderRadius: 10,
        marginTop: 10,
        color: theme.colors.text,
    },
    buttonText: {
        color: 'white',
    },
    background: {
        backgroundColor: theme.colors.background,
        justifyContent: "center",
        alignItems:"center",
        flex: 1,
    },
    text: {
        color: theme.colors.secondary,
        marginRight: 10,
    },
    title: {
        color: theme.colors.primary,
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
    }
});

export default styles;