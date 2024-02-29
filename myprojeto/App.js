import { Center } from "@gluestack-ui/themed-native-base";
import React from "react";
import { StyleSheet, Text, View, Button, Box, Input, Icon, Stack } from "react-native";
import { Avatar, ListItem } from "react-native-elements";





const Login = () => {
  return (

    <View style={[styles.container, {
      flexDirection: "column"
    }]}>



      <View spacing={5} style={[styles.img]} >
        <Avatar size={80} rounded source={{ uri: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/avatar-icon.png" }} />
      </View>

      <View align='center' spacing={5} style={[styles.input]}>
        <View style={[styles.input]}>
          <input placeholder="EMAIL" />
        </View>
        <View style={[styles.input]}>
          <input placeholder="SENHA" secureTextEntry={true} />
        </View>

      </View>
      <View align='center' spacing={5} style={[styles.input]}>
        <View style={[styles.input]}>
          <Button title="Logar" style={{ flex: 1, backgroundColor: "green" }} />
        </View>
        <View style={[styles.input]}>
          <Button title="Cadastrar-se" />
        </View>

      </View>
    </View>
  );
};



const Cadastro = () => {

  return (

    <View style={[styles.container, {
      flexDirection: "column"
    }]}>

      <View style={[styles.input, {
        align: "center"
      }]}>

        <text h5 style={{ backgroundColor: "green" }}  >Cadastro</text>
      </View>

      <View align='center' spacing={5} style={[styles.input]}>
        <text h1 >Nome</text>
        <input placeholder="NOME" />
        <text h1>Email</text>
        <input placeholder="EMAIL" />
        <text h1 >Senha</text>
        <input placeholder="SENHA" secureTextEntry={true} />
      </View>

      <Button title="Cadastrar" style={{ padding: "6px" }}></Button>
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
  img:{
    padding:20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Login;
