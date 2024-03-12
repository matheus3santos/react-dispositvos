import { Center } from "@gluestack-ui/themed-native-base";
import React from "react";
import { View,StyleSheet,TextInput } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { Button } from '@rneui/themed';
import axios from 'axios';






const CadastroContato = ({ navigation }) => {

    const [getNome, setNome] = useState('');
    const [getEmail, setEmail] = useState('');
    const [getNumero, setNumero] = useState('');
    async function inserirDados() {
        axios.post('http://localhost:8000/contatos', {
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
                navigation.navigate('Contatos');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <View style={styles.container}>
            <View style={styles.input}>
                <View align='center' spacing={5} style={[styles.input]}>

                    <Text h4 >Nome</Text>
                    <TextInput
                        placeholder="NOME"
                        // onChangeText={text => setEmail(text)}
                        // value={getEmail}

                    />
                    <Text h4>Email</Text>
                    <TextInput
                        placeholder="EMAIL"
                        // onChangeText={text => setEmail(text)}
                        // value={getEmail}
                    />
                    <Text h4>Telefone</Text>
                    <TextInput
                        placeholder="( )00000-0000"
                        // onChangeText={text => setNumero(text)}
                        // value={getNumero}

                    />
                </View>
                <View style={styles.input}>
                    <Button
                        title="Salvar"
                        style={{ flex: 1, backgroundColor: "green" }}
                        
                    />
                </View>
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
    },
    img: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CadastroContato;