import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FAB, Searchbar } from 'react-native-paper';
import { useDataSet } from '../../context/DataContext';

const SearchBar = ({text, newText}) => {

    const { theme } = useDataSet();
    // Si Hide = false alors bouton search disparait et searchbar apparait et ModalButton retrecit
    const [ isHide, setIsHide ] = React.useState(true);

    const onChangeSearch = query => newText(query)
    
    React.useEffect(() => {
        onChangeSearch(text);
    }, [text]);

    const styles = StyleSheet.create({
        searchBar: {
            marginHorizontal: 10,
            marginBottom: 10,
            height: 50,
            width: '80%',
        },
        container: {
            backgroundColor: 'transparent',
            position: 'absolute',
            bottom: 10,
            width: '100%',
        },
        searchButtonOpen: {
            position: 'absolute',
            bottom: 5,
            right: 10,
            zIndex: 1,
            padding: 2,
            borderRadius: 50,
            color: theme.colors.onPrimary,
        },
        searchButtonClose: {
            position: 'absolute',
            bottom: 15,
            right: 15,
            zIndex: 1,
            padding: 2,
            borderRadius: 50,
            backgroundColor: theme.colors.error,
        },
        searchBarContainer: {
            flexDirection: 'row',
            width: '100%',

        }

    });

    const handleClose = () => {
        setIsHide(true);
        newText('');
    }

    const handleOpen = () => {
        setIsHide(false);
    }

  return (
    <View style={styles.container}>
        {isHide ? 
            (
                <FAB 
                    icon='magnify'
                    size='medium'
                    color={theme.colors.onPrimary}
                    onPress={() => handleOpen()}
                    style={styles.searchButtonOpen}
                      />
            )
        :
            (
                <View style={styles.searchBarContainer}>
                <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={text}
                style={styles.searchBar}
                //mode='view'
                />
                <FAB 
                    icon='close'
                    size='small'
                    color={theme.colors.onError}
                    onPress={() => handleClose()}
                    style={styles.searchButtonClose}
                      />
                </View>

            )
        }
    </View>
  )
}

export default SearchBar;