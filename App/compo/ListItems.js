import React from 'react';
import { View,Image,StyleSheet,TouchableHighlight, Text} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {MaterialCommunityIcons} from '@expo/vector-icons';


import AppText from './AppText';
import Colors from '../config/Colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function ListItems({title,subTitle,image,IconComponent,onPress,renderLeftActions}) {
    return (
    <GestureHandlerRootView>
         <Swipeable renderLeftActions={renderLeftActions} style={styles.container} >
        <TouchableHighlight
            underlayColor={Colors.light}
            onPress={onPress}>

         <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.img} source={image}/>}
            <View style={styles.textContainer}>
                <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                 {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
            </View>
            <MaterialCommunityIcons style={styles.chevron} name="chevron-right" size={20} color={Colors.medium}/>
         </View>
        </TouchableHighlight>
    </Swipeable>
    </GestureHandlerRootView>
    
    );
}

const styles = StyleSheet.create({
    chevron:{
        alignSelf:"center"
    },
    container:{
        backgroundColor: Colors.white,
        flexDirection: "row",
        padding:15, 
    },
    img:{
        width:70,
        height:70,
        borderRadius:35,
        marginRight:10,
    },
    textContainer:{
        flex:1,
        paddingLeft: 10,
        justifyContent:'center',
    },
    title:{
        fontWeight:"700",
    },
    subTitle:{
        color:"#6e6969",
    },
})
export default ListItems;