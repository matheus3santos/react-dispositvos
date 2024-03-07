import { Center } from "@gluestack-ui/themed-native-base";
import React from "react";

import { StyleSheet, Text, View, Button, Box, Icon, Stack } from "react-native";
import { Avatar, ListItem, Header } from "react-native-elements";


function listarContatos(){
    axios.get('')
    .then(function(response){
        console.log("teste")
    }).catch(function(error){
        console.log(error)
    })
}


const ContatoScreen = ({ navigation }) => {
    return (


        <View style={[styles.container, {
            flexDirection: "column"
        }]}>

            <View>
                <Header
                    centerComponent={
                        <Text  style={{ color: '#fff',fontSize:20 }}>Lista de Contatos</Text>
                    }
                    rightComponent={
                    <Button
                    title="+"
                    onPress={() => navigation.navigate('CadastroContato')}
                    buttonStyle={{backgroundColor:'rgba(214, 61, 57, 1)',bordeRadius:'5'}}
                    titleStyle={{ color: 'red' }}
                    
                    />}
                />

            </View>

            <View style={[styles.input, {
                align: "center"
            }]}>

            </View>

            

            <View style={[styles.input]}>

                <ListItem bottomDivider
                    onPress={() => navigation.navigate('Edition')}>
                    <Avatar
                        rounded
                        source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                    />
                    <ListItem.Content>
                        <ListItem.Title>John Doe</ListItem.Title>
                        <ListItem.Subtitle>40028922</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                
                <ListItem bottomDivider>
                    <Avatar
                        rounded
                        icon={{
                            name: "person-outline",
                            type: "material",
                            size: 26,
                        }}
                        containerStyle={{ backgroundColor: "#c2c2c2" }}
                    />
                    <ListItem.Content>
                        <ListItem.Title>Alba King</ListItem.Title>
                        <ListItem.Subtitle>33445599</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                <ListItem>
                    <Avatar rounded title="A" containerStyle={{ backgroundColor: "grey" }} />
                    <ListItem.Content>
                        <ListItem.Title>Adam Eva</ListItem.Title>
                        <ListItem.Subtitle>81678197</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
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