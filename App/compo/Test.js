import React from 'react';
import { View,StyleSheet } from 'react-native';
import AppButton from './AppButton';

function Test(props) {
   return (
        <View style={styles.container}>
            <AppButton/>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
    }
})

export default Test;