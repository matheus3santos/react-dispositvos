import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Avatar, Button, Input } from "react-native-elements";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBaycglekt0PINlf6Zv2KvcGeGRnUOtGJw",
    authDomain: "banco-dispositivos.firebaseapp.com",
    projectId: "banco-dispositivos",
    storageBucket: "banco-dispositivos.appspot.com",
    messagingSenderId: "396426127659",
    appId: "1:396426127659:web:fa4fa0e630c308be963d6e",
    measurementId: "G-TVFDH1LW2J"
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);


const CadastroScreen = ({ navigation }) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

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


    }


    return (

        <View style={[styles.container, {
            flexDirection: "column"
        }]}>



            <View spacing={5} style={[styles.img]} >
                <Avatar size={80} rounded source={{ uri: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/avatar-icon.png" }} />
            </View>

            <View align='center' spacing={5} style={[styles.input]}>
                <View style={[styles.input]}>
                    <TextInput placeholder="EMAIL"
                        onChangeText={text => setEmail(text)}
                        value={email}

                    />
                </View>
                <View style={[styles.input]}>
                    <TextInput placeholder="SENHA"
                        onChangeText={text => setPassword(text)}
                        value={password}
                        secureTextEntry={true}

                    />
                </View>

            </View>
            <View align='center' spacing={5} style={[styles.input]}>

                <View style={[styles.input]}>
                    <Button
                        title="Login"

                        style={{ backgroundColor: 'green' }}
                        onPress={() => {
                            handleLogin();
                            navigation.navigate('Contatos');
                            
                        }}
                    />
                </View>
                <View style={[styles.input]}>
                    <Button
                        buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)' }}
                        title="Cadastrar-se"
                        onPress={() => {

                            navigation.navigate('Cadastro')
                        }}
                    />
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