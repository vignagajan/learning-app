import React from 'react'
import { Button } from 'react-native-elements'
import { StyleSheet, View, Text, SafeAreaView, Platform, Image } from 'react-native';
import { auth } from "../../config/firebase"


const ProfileScreen = ( { navigation } ) => {

    const signout = () => {
        auth.signOut().then(() => {
            navigation.replace("Login");
        });
    };
    
    if (!auth.currentUser.displayName){
        signout();
    }

    return (
        <SafeAreaView style={ styles.container }>
            <View style={ styles.header }>
                <View style={styles.headerColumn}>
                    <Image
                    style={styles.profilePic}
                    source={{uri: auth.currentUser.photoURL}}
                    />
                    <Text style={styles.displayName}>{ auth.currentUser.displayName }</Text>
                </View>
            </View>

            <Button onPress ={signout} buttonStyle={ styles.button } titleStyle={{ fontSize: 18, fontFamily:'Regular'}} title="Sign Out" />

        </SafeAreaView>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        paddingTop:30,
        backgroundColor:"white",
    },
    header:{
        width:'100%',
        height: 250,
        backgroundColor: "#EFEFEF",

    },
    headerColumn: {
        backgroundColor: 'transparent',
        ...Platform.select({
          ios: {
            alignItems: 'center',
            elevation: 1,
            marginTop: -1,
          },
          android: {
            alignItems: 'center',
          },
        }),
    },
    profilePic: {
        borderColor: '#FFF',
        borderRadius: 85,
        borderWidth: 3,
        height: 136,
        marginTop: 56,
        marginBottom: 56,
        width: 136,
    },
    displayName: {
        color: '#000',
        fontSize: 18,
        fontFamily:'Regular',
        marginTop: -40,
        paddingBottom: 8,
      },
    button: {
        marginTop:450,
        height:50, 
        borderRadius: 30,
        width:250, 
        marginLeft:10,
    },
})