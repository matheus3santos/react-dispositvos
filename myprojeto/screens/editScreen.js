import { Center } from "@gluestack-ui/themed-native-base";
import React from "react";
import { StyleSheet, Text, View, Button, Box, Icon, Stack } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { Input } from '@rneui/themed';



function alterarDados(){

    axios.put(
    {
    nome: getNome,
    telefone: getEmail,
    cpf: getTelefone
    }).try { console.log('certo')
        then
    } catch (error) {
    console.log('erro')}
}


const EditScreen = ({ navigation }) => {
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
                    <Input placeholder="NOME" />
                    <Text h1>Email</Text>
                    <Input placeholder="EMAIL" />
                    <Text h1 >Telefone</Text>
                    <Input placeholder="Telefone" />
                </View>

                <View style={[styles.input]}>
                    <Button title="Alterar" style={{ flex: 1, backgroundColor: "green" }} />
                </View>
                <View style={[styles.input]}>
                    <Button title="Excluir" style={{ flex: 1, backgroundColor: "green" }} />
                </View>

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

export default EditScreen;