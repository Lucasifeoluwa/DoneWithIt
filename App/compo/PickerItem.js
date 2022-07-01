import React from 'react';
import { TouchableOpacity,StyleSheet,View } from 'react-native';
import AppText from './AppText';


function PickerItem({IconComponent,label,onPress,}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style = {styles.content}>
                {IconComponent}
                <AppText style={styles.text}>{label}</AppText>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container:{
        paddingHorizontal:30,
        paddingVertical:10,
        width:"33%",
        flex:1
    },
    content:{
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        marginTop: 5,
        textAlign:"center",
        fontSize:14,
    }
})

export default PickerItem;