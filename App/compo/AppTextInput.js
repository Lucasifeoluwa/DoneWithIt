import React from 'react';
import { View,TextInput,StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';



import Colors from '../config/Colors';
 
function AppTextInput({icon,width = "100%",...otherProps}) {
    return (
        <View style={[styles.container, {width}]}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={Colors.medium} style={styles.icon}/>}
            <TextInput style={styles.text} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderRadius:25,
        backgroundColor:Colors.light,
        padding:15,
        marginVertical:10,
        alignContent:"center",
    },
    icon:{
        paddingTop:5,
        marginRight:10,
    },
    text:{
        color:Colors.dark,
        fontSize:18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    }
})

export default AppTextInput;