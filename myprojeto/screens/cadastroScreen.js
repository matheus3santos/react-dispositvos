import { Center } from "@gluestack-ui/themed-native-base";
import React from "react";
import { StyleSheet, Text, View, Button, Box, Icon, Stack } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { Input } from '@rneui/themed';



const CadastroScreen = ({ navigation }) => {
        return (
            <View style={[styles.container, {
                flexDirection: "column"
            }]}>

                <View style={[styles.input, {
                    align: "center"
                }]}>

    
                </View>

                <View align='center' spacing={5} style={[styles.input]}>
                    <text h1 >Nome</text>
                    <Input placeholder="NOME" />
                    <text h1 >CPF</text>
                    <Input placeholder="000.000.000-00" />
                    <text h1>Email</text>
                    <Input placeholder="EMAIL" />
                    <text h1 >Senha</text>
                    <Input placeholder="SENHA" secureTextEntry={true} />
                </View>

                <Button title="Salvar" style={{ padding: "6px" }}></Button>
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