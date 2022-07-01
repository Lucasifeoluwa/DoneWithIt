import React, { useState } from 'react';
import { View,StyleSheet,TouchableWithoutFeedback,Modal,Button,FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Screen from './Screen';
import AppText from "./AppText";
import Colors from '../config/Colors';
import {  } from 'react-native-web';
import PickerItem from './PickerItem';
import Icon from './Icon';



function AppPicker({icon,placeholder,onSelectItem,column,items,selectedItem, width = "100%"}) {

    const[modalVisible,setModalVisible]=useState(false);

    return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>

        <View style={[styles.container, {width}]}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={Colors.medium} style={styles.icon}/>}
            <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
            <MaterialCommunityIcons name="chevron-down" size={20} color={Colors.medium}/>
        </View>

      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
          
          <Screen>
            <Button title="close" onPress={() => setModalVisible(false)} style={styles.button}/>
            <View>
                <FlatList
                    data={items}
                    keyExtractor={(item) => item.value.toString()}
                    numColumns={column}
                    renderItem={({item}) => 
                    <PickerItem
                        IconComponent={
                            <Icon name={item.icon} backgroundColor={item.color}/>
                        }
                        label={item.label}
                        onPress={() => {
                            setModalVisible(false)
                            onSelectItem(item);
                        }}
                    />}
                    >
                    </FlatList>
            </View>
          </Screen>

      </Modal>
      </>
    );
}

const styles = StyleSheet.create({
    button:{
        
    },
    container:{
        flexDirection:'row',
        borderRadius:25,
        backgroundColor:Colors.light,
        width:"100%",
        padding:15,
        marginVertical:10,
        alignContent:"center",
    },
    flat:{
        
        marginBottom:10,
        marginRight:10
    },
    icon:{
        paddingTop:5,
        marginRight:10,
    },
    text:{
        flex:1,
    }
})

export default AppPicker;