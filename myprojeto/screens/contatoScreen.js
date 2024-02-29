import { Center } from "@gluestack-ui/themed-native-base";
import React from "react";

import { StyleSheet, Text, View, Button, Box, Input, Icon, Stack } from "react-native";
import { Avatar, ListItem, Header } from "react-native-elements";





const ContatoScreen = ({ navigation }) => {
    return (


        <View style={[styles.container, {
            flexDirection: "column"
        }]}>

            <View>
                <Header
                    centerComponent={{ text: 'Contatos', style: { color: '#fff' }, }}
                    rightComponent={
                    <Button
                    title="Adicionar"
                    onPress={() => navigation.navigate('CadastroContato')}
                    type="clear"
                    titleStyle={{ color: '#fff' }}
                    
                    />}
                />

            </View>

            <View style={[styles.input, {
                align: "center"
            }]}>

            </View>

            

            <View style={[styles.input]}>

                <ListItem bottomDivider
                    onPress={() => navigation.navigate('EditScreen')}>
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