import React from "react";
import { Input, Icon, Avatar } from '@rneui/themed';
import { StyleSheet, Text, View,Button,TextInput } from "react-native";

const Flex = () => {
return (
<View style={[styles.container, {
flexDirection: "column"
}]}>
  <View style={{ flex: 2, backgroundColor: "red" }} />
  <View style={{ flex: 3, backgroundColor: "darkorange" }} />
  <View>
    <Button
    title="Learn More"
    color="#841584"
    accessibilityLabel="Learn more about this purple button"/>
  </View>

  
</View>

);
};


const Flex2 = () => {
  return (
  <View style={[styles.container2, {
  flexDirection: "column",
  alignItems:"center"
  }]}>
    <View>
    <Avatar
          size={100}
          rounded
          source={{uri: "https://img.freepik.com/vetores-premium/icone-de-perfil-de-usuario-em-estilo-plano-ilustracao-em-vetor-avatar-membro-em-fundo-isolado-conceito-de-negocio-de-sinal-de-permissao-humana_157943-15752.jpg?w=826"}}
    />
    </View>
    <View>
      <Input
        placeholder='BASIC INPUT'
      />
      <Input placeholder="Password" secureTextEntry={true} />

    </View>
    <View style={[styles.botao]}>
      <Button
      title="Logar"
      color="green"
      accessibilityLabel="Learn more about this purple button"/>
    </View>
    <View style={[styles.botao]}>
      <Button
      title="Cadastre-se"
      color="green"
      accessibilityLabel="Learn more about this purple button"/>
    </View>
    <View style={{ flex: 6, backgroundColor: "yellow" }} />
  
    
  </View>
  
  );
  };

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 10,
},
container2: {
  flex: 1,
  padding: 10,
  },
botao: {
  flex: 1,
  padding: 5
    },
input: {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
}
});

export default Flex2;