import React from "react";
import { Input, Icon, Avatar } from '@rneui/themed';
import { StyleSheet, Text, View,Button,TextInput } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView } from "react-native-gesture-handler";
import HomeScreen from "./screens/homeScreen";
import CadastroScreen from "./screens/cadastroScreen";


const Stack = createNativeStackNavigator();



export default function App() {
 return (
  <NavigationContainer initialRouteName="Home">
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Cadastro" component={CadastroScreen} />
    </Stack.Navigator>
  </NavigationContainer>
 );

};