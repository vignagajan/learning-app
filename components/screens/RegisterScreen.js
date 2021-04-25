import React, { useState, useRef } from 'react'
import { View,  Keyboard, KeyboardAvoidingView, ScrollView, Dimensions, SafeAreaView,TouchableWithoutFeedback, Platform, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { Button, Input } from 'react-native-elements'
import { FontAwesome,FontAwesome5 } from '@expo/vector-icons';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('window').width;

const RegisterScreen = ({ navigation }) => {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [imgURL, setImgURL] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : null} 
            style={{flex: 1}}>
        <SafeAreaView style={styles.container}>
            <ScrollView style={{paddingVertical:2}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <View style={ styles.textContainer }>
                        <Text style={ styles.text }>
                            WELCOME!
                        </Text>
                    </View>
                    <Image source={require('../../assets/images/register-image.png')}
                        style={ styles.image }
                    />
                    <View style={styles.form}>
                        <View style={styles.inputContainer}>
                            <Input 
                                placeholder="First Name" 
                                value={fname}
                                inputStyle={{ fontFamily:'Regular' }}
                                onChangeText={ (text) => setFname(text)} 
                                autofocus
                            />
                            <FontAwesome name="user" size={25} style={ styles.icon } />
                            <Input 
                                placeholder="Last Name" 
                                value={lname}
                                inputStyle={{ fontFamily:'Regular' }}
                                onChangeText={ (text) => setLname(text)} 
                            />   
                            <FontAwesome5 name="user-friends" size={25} style={ styles.icon } />
                            <Input 
                                placeholder="Profile Pic URL" 
                                value={imgURL} 
                                inputStyle={{ fontFamily:'Regular' }}
                                onChangeText={ (text) => setImgURL(text)} 
                            />
                            <FontAwesome5 name="link" size={25} style={ styles.icon } />
                            <Input 
                                placeholder="Email" 
                                value={email} 
                                inputStyle={{ fontFamily:'Regular' }}
                                onChangeText={ (text) => setEmail(text)} 
                                autofocus
                            />
                            <FontAwesome5 name="voicemail" size={25} style={ styles.icon } />
                            <Input 
                                placeholder="Password" 
                                type="password" 
                                value={password} 
                                inputStyle={{ fontFamily:'Regular' }}
                                onChangeText={ (text) => setPassword(text)} 
                                secureTextEntry
                            />   
                            <FontAwesome5 name="lock" size={25} style={ styles.icon } />
                        </View>
                        <Button onPress ={() => navigation.navigate('Login')} buttonStyle={{height:50, borderRadius:30}} titleStyle={{ fontSize: 18, fontFamily:'Regular'}} containerStyle={styles.button} type="outline" title="Register" /> 
                    </View>
                </View>
            </TouchableWithoutFeedback>
            </ScrollView>
        </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
    },
    image:{
        height: 200,
        width: 350,
        resizeMode:'center',
        marginLeft:80
    },
    textContainer:{
        marginTop: 40,
        marginLeft: 40,
    },
    text:{ 
        fontFamily: 'SemiBold', 
        fontSize: 30, 
        color: '#2188dd',
    },
    form: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 40,
        borderTopLeftRadius:30,
        borderBottomRightRadius:-30,

    },
    inputContainer: {
        width: 350,
    },
    icon:{ 
        color: '#C4C4C4', 
        marginLeft:310,
        marginTop:-60,
        paddingBottom:30,
    },
    button: {
        marginTop:30,
        width:300, 
    },
    message:{
        fontFamily:'Regular',
        color:'grey',
        fontSize:14,
        marginTop:10,
    },
    register:{
        fontFamily:'Regular',
        color:'#2188dd',
        fontSize:14,
        marginTop:10,
    },
})
