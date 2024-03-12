import React, { useEffect, useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Button, Text } from '@rneui/themed';
import axios from 'axios';






const EditScreen = ({ route,navigation }) => {

    const getId = route.params.id;
    const [getNome, setNome] = useState('');
    const [getEmail, setEmail] = useState('');
    const [getNumero, setNumero] = useState('')
    
    const atualizarDados = async () => {
        try {
            const response = await axios.put(`http://localhost:8000/contatos/${getId}`, {
                nome: getNome,
                numero: getNumero,
                email: getEmail,
            });
            console.log(response.data);
            alert("Registro atualizado com sucesso");
        } catch (error) {
            console.error(error);
        }
    };

    const excluirDados = async () => {
        try {
            const response = await axios.delete(`http://localhost:8000/contatos/${getId}`);
            console.log(response.data);
            alert("Registro excluído com sucesso");
            navigation.navigate('Contatos');
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        // Extrair dados do parâmetro de rota
        const { nome, numero, email } = route.params;
        // Definir os valores iniciais dos campos de entrada
        setNome(nome);
        setNumero(numero);
        setEmail(email);
    }, []);




    return (
        <View style={styles.container}>

            <View style={styles.input}>

            </View>

            <View align='center' spacing={5} style={[styles.input]}>
                <Text h1 >Nome</Text>
                <TextInput placeholder="NOME"
                    onChangeText={text => setNome(text)}
                    value={getNome}
                />
                <Text h1>Email</Text>
                <TextInput placeholder="EMAIL"
                    onChangeText={text => setEmail(text)}
                    value={getEmail}
                />
                <Text h1 >Telefone</Text>
                <TextInput placeholder="Telefone"
                    onChangeText={text => setNumero(text)}
                    value={getNumero}
                />
            </View>

            <View style={[styles.input]}>
                <Button title="Alterar" style={{ flex: 1, backgroundColor: "green" }}
                onPress={() => {
                    atualizarDados();
                    navigation.navigate('Contatos')}}

                />
            </View>
            <View style={[styles.input]}>
                <Button title="Excluir" style={{ flex: 1, backgroundColor: "green" }}
                    onPress={() => {
                        excluirDados();
                        navigation.navigate('Contatos')
                    }} />

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
    },
    img: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default EditScreen;