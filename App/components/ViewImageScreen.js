import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,ImageBackground,Image,Dimensions, } from 'react-native';
import { } from 'react-native-web';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Colors from '../config/Colors';

function ViewImageScreen(props) {
    return (
       <View style={styles.Container}>         
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name='close' color="white" size={35}/>
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline"
                color="white" size={35}/>
            </View>
        <Image resizeMode='contain' source={require('../assets/chair.jpg')} style={styles.img} />
       </View>
    );
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"black",
    },

    closeIcon:{
        position:'absolute',
        top:50,
        left:30,
    },
    deleteIcon:{
        position:'absolute',
        top:50,
        right:30,
    },
   
    img:{
        width:'100%',
        height:'100%',
    },

})

export default ViewImageScreen;