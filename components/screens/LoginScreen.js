import React, { useState, useEffect } from 'react'
import { View,  Keyboard, KeyboardAvoidingView, ScrollView, Dimensions, SafeAreaView,TouchableWithoutFeedback, Platform, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { Button, Input } from 'react-native-elements'
import { PRIMARY, SECONDARY } from '../../assets/styles/colors.js'
import { FontAwesome5 } from '@expo/vector-icons';

import { auth } from "../../config/firebase";

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser){
                navigation.replace("Profile");
            }
        })
        return unsubscribe;
    }, []);

    const signin = () => {
        auth.signInWithEmailAndPassword(email, password)
        .catch(error => alert(error));
    };

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
                            WELCOME
                        </Text>
                        <Text style={ styles.text }>
                            BACK!
                        </Text>
                    </View>
                    <Image source={require('../../assets/images/login-image.png')}
                        style={ styles.image }
                    />
                    <View style={styles.form}>
                        <View style={styles.inputContainer}>
                            <Input 
                                placeholder="Email" 
                                type="email" 
                                value={email} 
                                inputStyle={{ fontFamily:'Regular'}}
                                onChangeText={ (text) => setEmail(text)} 
                                autofocus
                            />
                            <FontAwesome5 name="voicemail" size={25} style={ styles.icon } />
                            <Input 
                                placeholder="Password" 
                                type="password" 
                                value={password} 
                                inputStyle={{ fontFamily:'Regular'}}
                                onChangeText={ (text) => setPassword(text)} 
                                onSubmitEditing={signin}
                                secureTextEntry
                            />   
                            <FontAwesome5 name="lock" size={25} style={ styles.icon } />
                        </View>
                        <Button onPress ={signin} buttonStyle={{height:50, borderRadius: 30,}} titleStyle={{ fontSize: 18, fontFamily:'Regular'}} containerStyle={styles.button} title="Sign In" /> 
                        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                        <Text style={ styles.message}>Don???t have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')} >
                        <Text style={ styles.register}>Create One</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            </ScrollView>
        </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
    },
    image:{
        height: 258,
        width: 384,
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
        color: PRIMARY,
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
        color:SECONDARY, 
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
        color:SECONDARY,
        fontSize:14,
        marginTop:10,
    },
    register:{
        fontFamily:'Regular',
        color:PRIMARY,
        fontSize:14,
        marginTop:10,
    },
})
