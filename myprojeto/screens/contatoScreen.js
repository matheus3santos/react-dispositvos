import React, { useEffect, useState } from "react";
import axios from 'axios';
import { StyleSheet, Text, View, Button } from "react-native";
import { ListItem, Header } from "react-native-elements";
import { TouchableOpacity } from "react-native";




const ContatoScreen = ({ route, navigation }) => {

    const [getData, setData] = useState([]);

    useEffect(() => {
        async function resgatarDados() {
            const result = await axios('http://localhost:8000/contatos');
            setData(result.data);
        }
        resgatarDados();
    }, []); // Lista de dependências vazia para executar apenas uma vez

    const navigateToEditionScreen = (id) => {
        navigation.navigate('Edition', { id: id });
    };

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
                alignItems: "center"
            }]}>

            </View>
            <View style={styles.input}>
                {getData.map((contato) => (
                        <TouchableOpacity key={contato.id} onPress={() => navigateToEditionScreen(contato.id)}>
                            <ListItem bottomDivider>
                                <ListItem.Content>
                                    <ListItem.Title>{contato.nome}</ListItem.Title>
                                    <ListItem.Subtitle>{contato.numero}</ListItem.Subtitle>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        </TouchableOpacity>
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