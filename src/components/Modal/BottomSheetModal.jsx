import { StyleSheet, View } from 'react-native'
import React from 'react'
import {
    BottomSheetModal,
    BottomSheetBackdrop,
    BottomSheetHandle
  } from "@gorhom/bottom-sheet";
import { FAB } from 'react-native-paper';
import ShowCards from '../Cards/ShowCards';
import useList from '../../context/List/ListContext';
import { ThemeContext } from '../../context/ThemeContext';

const BottomSheetModalComponent = () => {

    const [isBottomSheetOpen, setIsBottomSheetOpen] = React.useState(false);

    const snapPoints = React.useMemo(() => ["80%", "95%"], []);
    const bottomSheetRefModal = React.useRef(null);

    const { list } = useList();

    const { theme } = React.useContext(ThemeContext);


    const styles = StyleSheet.create({
        buttonModalOpen: {
          position: "absolute",
          bottom: 10,
          right: "37%",
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
        },
        buttonModalClose: {
          position: "absolute",
          top: 420,
          width: 70,
          height: 70,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
        },
        background: {
          backgroundColor: theme.colors.onSecondary,
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        },
        listContainerLittle: {
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          flex: 1,
          marginVertical: 10,
        },
        listContainerBig: {
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          flex: 1,
          marginVertical: 40,
        },
        ModalWindow: {
          backgroundColor: "white",
          width: "100%",
          borderRadius: 30,
          shadowColor: theme.colors.shadow,
          shadowOffset: {
            width: 0,
            height: -10,
          },
          shadowOpacity: 0.4,
          shadowRadius: 5,
          color: theme.colors.text,
        },
      });

      const HandlePresentModal = () => {
        bottomSheetRefModal.current.present();
        setIsBottomSheetOpen(true);
      };
    
    const renderBackdrop = React.useCallback(
        props => (
          <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={-1}
            appearsOnIndex={2}
            opacity={0.7}
            color={theme.colors.backdrop}
          />
          
        ),
        []
      );
      
      const renderHandledrop = React.useCallback(
        props => (
          <BottomSheetHandle
            {...props}
            opacity={0.7}
            color={theme.colors.background}
            style={{ transform: [{ scaleX: 3 }]}}
          />
        ),
        []
      );
    
      const clodeModal=()=>{
        bottomSheetRefModal.current.close();
      }

  return (
    <>
        <BottomSheetModal
            ref={bottomSheetRefModal}
            snapPoints={snapPoints}
            index={0}
            style={styles.ModalWindow}
            backgroundStyle={{
                backgroundColor: theme.colors.onSecondary,
            }}
            backdropComponent={renderBackdrop}
            handleComponent={renderHandledrop}
            >
            <View style={styles.background}>
                <View style={ list.length >2 ? styles.listContainerBig : styles.listContainerLittle} >
                {list?.map((item, index) => (
                    <ShowCards 
                    key={index}
                    item={index}
                    id={index}
                    />
                    ))
                }
                </View>
                <FAB
                icon="close"
                onPress={clodeModal}
                style={styles.buttonModalClose}
                theme={theme}
                />
            </View>
        </BottomSheetModal>
        <FAB
            icon={
                isBottomSheetOpen ? "stretch-to-page-outline" : "close"
            }
            size="large"
            style={styles.buttonModalOpen}
            theme={theme}
            disabled={list.length == 0  ? true : false}
            onPress={HandlePresentModal}
        />
    </>
  )
}

export default BottomSheetModalComponent;

