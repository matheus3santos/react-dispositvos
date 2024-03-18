import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Button, Text } from '@rneui/themed';
import axios from 'axios';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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

    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleCadastro = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('Usuário criado:', user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }



    //     async function inserirUsuario() {
    //         axios.post('http://localhost:3000/users', {
    //             nome: getNome,
    //             cpf: getCpf,
    //             email: getEmail,
    //             senha: getSenha,
    //         })
    //             .then(function (response) {
    //                 setEmail('');
    //                 setSenha('');
    //                 console.log(response)
    //                 showMessage({ // Supondo que showMessage é importado de algum lugar
    //                     message: "Registro Cadastrado com sucesso",
    //                     type: "success",
    //                 });
    //             })
    //             .catch(function (error) {
    //                 console.log(error);
    //             });
    //     }



    return (
        <View style={[styles.container, {
            flexDirection: "column"
        }]}>

            <View style={[styles.input, {
                align: "center"
            }]}>


            </View>

            <View align='center' spacing={5} style={[styles.input]}>

                <Text h1>Email</Text>
                <TextInput placeholder="EMAIL"
                    onChangeText={text => setEmail(text)}
                    value={email}
                />

                <Text h1 >Senha</Text>
                <TextInput placeholder="SENHA"
                    onChangeText={text => setPassword(text)}
                    value={password}
                    secureTextEntry={true} />
            </View>

            <Button
                title="Cadastrar"
                style={{ padding: "6px" }}
                onPress={() => {
                    handleCadastro();
                    navigation.navigate('Home')
                }}

            />
        </View>
    )
}


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
});

export default CadastroScreen;