import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Button, Text } from '@rneui/themed';
import axios from 'axios';






const CadastroContato = ({ navigation }) => {

    const [getNome, setNome] = useState('');
    const [getEmail, setEmail] = useState('');
    const [getNumero, setNumero] = useState('');

    async function inserirDados() {
        axios.post('http://localhost:3000/contatos', {
            nome: getNome,
            numero: getNumero,
            email: getEmail,
        })
            .then(function (response) {
                setNome('');
                setNumero('');
                setEmail('');
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
        <View style={styles.container}>

            <View align='center' spacing={5}>

                <Text h4 >Nome</Text>
                <TextInput
                    style={[styles.input]}
                    placeholder="NOME"
                    onChangeText={text => setNome(text)}
                    value={getNome}

                />
                <Text h4>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="EMAIL"
                    onChangeText={text => setEmail(text)}
                    value={getEmail}
                />
                <Text h4>Telefone</Text>
                <TextInput
                    style={[styles.input]}
                    placeholder="( )00000-0000"
                    onChangeText={text => setNumero(text)}
                    value={getNumero}

                />
            </View>
            <View>
                <Button
                    title="Salvar"
                    style={{ flex: 1,paddingTop: 20}}
                    onPress={() => {
                        inserirDados();
                        navigation.navigate('Contatos')
                    }}

                />
            </View>



        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        flexDirection: "column",
    },
    input: {
        paddingBottom: 20,
        align: "center",
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
    },
    img: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CadastroContato;