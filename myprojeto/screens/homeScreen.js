import React from "react";
import { StyleSheet, Text, View, Box, Icon, Stack } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { Input, Button } from '@rneui/themed';
import { color } from "react-native-elements/dist/helpers";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBaycglekt0PINlf6Zv2KvcGeGRnUOtGJw",
    authDomain: "banco-dispositivos.firebaseapp.com",
    projectId: "banco-dispositivos",
    storageBucket: "banco-dispositivos.appspot.com",
    messagingSenderId: "396426127659",
    appId: "1:396426127659:web:fa4fa0e630c308be963d6e",
    measurementId: "G-TVFDH1LW2J"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });






const CadastroScreen = ({ navigation }) => {

    return (

        <View style={[styles.container, {
            flexDirection: "column"
        }]}>



            <View spacing={5} style={[styles.img]} >
                <Avatar size={80} rounded source={{ uri: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/avatar-icon.png" }} />
            </View>

            <View align='center' spacing={5} style={[styles.input]}>
                <View style={[styles.input]}>
                    <Input placeholder="EMAIL" />
                </View>
                <View style={[styles.input]}>
                    <Input placeholder="SENHA" secureTextEntry={true} />
                </View>

            </View>
            <View align='center' spacing={5} style={[styles.input]}>

                <View style={[styles.input]}>
                    <Button
                        title="Login"
                        style={{ backgroundColor: 'green' }}
                        onPress={() => navigation.navigate('Contatos')
                        } />
                </View>
                <View style={[styles.input]}>
                    <Button
                        buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)' }}
                        title="Cadastrar-se"
                        onPress={() => navigation.navigate('Cadastro')
                        } />
                </View>



            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
    },
    input: {
        paddingBottom: 20,

    },
    img: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
})


export default CadastroScreen;