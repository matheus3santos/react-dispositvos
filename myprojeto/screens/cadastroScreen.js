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
                    <Text h1 >Nome</Text>
                    <Input placeholder="NOME" />
                    <Text h1 >CPF</Text>
                    <Input placeholder="000.000.000-00" />
                    <Text h1>Email</Text>
                    <Input placeholder="EMAIL" />
                    <Text h1 >Senha</Text>
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