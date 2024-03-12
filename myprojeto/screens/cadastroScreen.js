import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Button, Text } from '@rneui/themed';
import axios from 'axios';



const CadastroScreen = ({ navigation }) => {

    const [getNome, setNome] = useState('');
    const [getEmail, setEmail] = useState('');
    const [getCpf, setCpf] = useState('');
    const [getSenha, setSenha] = useState('');

    async function inserirUsuario() {
        axios.post('http://localhost:8000/users', {
            nome: getNome,
            cpf: getCpf,
            email: getEmail,
            senha: getSenha,
        })
            .then(function (response) {
                setNome('');
                setCpf('');
                setEmail('');
                setSenha('');
                console.log(response)
                showMessage({ // Supondo que showMessage é importado de algum lugar
                    message: "Registro Cadastrado com sucesso",
                    type: "success",
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <View style={[styles.container, {
            flexDirection: "column"
        }]}>

            <View style={[styles.input, {
                align: "center"
            }]}>


            </View>

            <View align='center' spacing={5} style={[styles.input]}>
                <Text h1 >Nome</Text>
                <TextInput
                    placeholder="NOME"
                    onChangeText={text => setNome(text)}
                    value={getNome} />
                <Text h1 >CPF</Text>
                <TextInput
                    placeholder="000.000.000-00"
                    onChangeText={text => setCpf(text)}
                    value={getCpf}
                />

                <Text h1>Email</Text>
                <TextInput placeholder="EMAIL"
                    onChangeText={text => setEmail(text)}
                    value={getEmail}
                />

                <Text h1 >Senha</Text>
                <TextInput placeholder="SENHA"
                    onChangeText={text => setSenha(text)}
                    value={getSenha}
                    secureTextEntry={true} />
            </View>

            <Button
                title="Salvar"
                style={{ padding: "6px" }}
                onPress={() => {
                    inserirUsuario();
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