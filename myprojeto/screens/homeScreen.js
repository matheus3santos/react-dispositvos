import React from "react";
import { StyleSheet, Text, View, Box, Icon, Stack } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { Input, Button } from '@rneui/themed';
import { color } from "react-native-elements/dist/helpers";



const CadastroScreen = ({ navigation }) => {

    return (

        <View style={[styles.container, {
            flexDirection: "column"
        }]}>



            <View spacing={5} style={[styles.img]} >
                <Avatar size={80} rounded source={{ uri: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/avatar-icon.png" }} />
            </View>

            <View align='center' spacing={5} style={[styles.input]}>
                <View style={[styles.input]}>
                    <Input placeholder="EMAIL" />
                </View>
                <View style={[styles.input]}>
                    <Input placeholder="SENHA" secureTextEntry={true} />
                </View>

            </View>
            <View align='center' spacing={5} style={[styles.input]}>
                <View style={[styles.input]}>
                    <Button
                        title="Login"
                        style={{ flex: 1, backgroundColor: "green" }}
                        onPress={() => navigation.navigate('Contatos')
                        } />
                </View>
                <View style={[styles.input]}>
                    <Button
                        buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)' }}
                        title="Cadastrar-se"
                        onPress={() => navigation.navigate('Cadastro')
                        } />
                </View>

            </View>
        </View>
    );
};



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
})


export default CadastroScreen;