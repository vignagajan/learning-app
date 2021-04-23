import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Button,  } from 'react-native-elements' ; 

const StartScreen = () => {
    return (
        <View style={ styles.container }>
            <Image source={require('../../assets/images/start-image.png')}
                style={ styles.image }
            />
            <View style={ styles.textContainer }>
                <Text style={ styles.text }>
                    Online 
                </Text>
                <Text style={ styles.text }>
                    Learing Platform
                </Text>
            </View>
            <Button buttonStyle={{height:50}} titleStyle={{ fontSize: 18}} containerStyle={styles.button} title="GET STARTED" /> 
        </View>
    )
}

export default StartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        height:325,
        width: 325,
        resizeMode:'center',
    },
    textContainer:{
        marginTop: 75,
        marginBottom: 140,
        alignItems: 'center',
    },
    text:{ 
        fontFamily: 'SemiBold', 
        fontSize: 25, 
        color: "#2188dd",
    },
    button: {
        width:300, 
        borderRadius: 30,
    },
})

