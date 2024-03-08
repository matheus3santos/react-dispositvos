import { Center } from "@gluestack-ui/themed-native-base";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { StyleSheet, Text, View, Button, Box, Icon, Stack } from "react-native";
import { Avatar, ListItem, Header } from "react-native-elements";




const ContatoScreen = ({ route, navigation }) => {

    const [getData, setData] = useState([]);

    useEffect(() => {
        async function resgatarDados() {
            const result = await axios(
                'http://localhost:3000/contatos',
            );
            setData(result.data);
        }
        resgatarDados();

    })

    return (


        <View style={[styles.container, {
            flexDirection: "column"
        }]}>

            <View>
                <Header
                    centerComponent={
                        <Text style={{ color: '#fff', fontSize: 20 }}>Lista de Contatos</Text>
                    }
                    rightComponent={
                        <Button
                            title="+"
                            onPress={() => navigation.navigate('CadastroContato')}
                            buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)', bordeRadius: '5' }}
                            titleStyle={{ color: 'red' }}

                        />}
                />

            </View>

            <View style={[styles.input, {
                align: "center"
            }]}>

            </View>
            <View style={[styles.input]}>


                {
                    getData.map((linha, 1) => (

                <ListItem
                    key={i}
                    title={linha.nome}
                    Subtitle={linha.numero}
                    bottomDivider
                    onPress={() => navigation.navigate('Edition')}>

                </ListItem>


                    ))
                }
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
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

export default ContatoScreen;