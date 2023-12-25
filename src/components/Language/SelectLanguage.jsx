import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-paper';
import { useDataSet } from '../../context/DataContext';
import { SelectList } from 'react-native-dropdown-select-list';

const SelectLanguage = () => {

    const { lang, toggleLanguage, theme } = useDataSet();

    const [selected, setSelected] = React.useState("ENG");

      const styles = StyleSheet.create({
        chevron: {
            color: theme.colors.background,
        },
        boxStyles:{
            backgroundColor: theme.colors.surfaceVariant,
            borderColor: theme.colors.primary,
            borderWidth: 2,
            borderRadius: 10,
            padding: 2,
            marginTop: 10,
            marginBottom: -8,
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 30,
            width: 100,
            height: 50,
        },
        boxStylesText:{
            color: theme.colors.onSurfaceVariant,
        },
        dropdownStyles:{
            backgroundColor: theme.colors.elevation.level4,
            alignItems: 'center',
            height: 300,
            zIndex: 10,
        },
        dropdownText:{
            color: theme.colors.onSurfaceVariant,
        },
      });

      const data= [
                    {key: "1",value: "ENG",},
                    {key: "2",value: "FRA",},
                    {key: "3",value: "ARB",},
                    {key: "4",value: "KOR",},
                    {key: "5",value: "JAP",},
                    {key: "6",value: "DEU",},
                    {key: "7",value: "CHI",},
                    {key: "8",value: "VIE",},
                    {key: "9",value: "RUS",},
                    {key: "10",value: "POR",},
                    {key: "11",value: "SWE",},
                    {key: "12",value: "BEN",},
                    {key: "13",value: "GRE",}
                  ]

  return (
    <SelectList
      setSelected={(val)=> setSelected(val)}
      data={data}
      save="value"
      arrowicon={<Icon source="chevron-down" size={20} style={styles.chevron} />} 
      closeicon={<Icon source="chevron-up" size={20} style={styles.chevron} />} 
      search={false} 
      placeholder={selected}
      boxStyles={styles.boxStyles} 
      inputStyles={styles.boxStylesText}
      defaultOption={selected}  
      dropdownStyles={styles.dropdownStyles}
      dropdownTextStyles={styles.dropdownText}
    />
  )
}

export default SelectLanguage

