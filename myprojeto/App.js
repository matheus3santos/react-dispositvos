
import React from "react";
import { Stack } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/homeScreen'
import CadastroScreen from './screens/cadastroScreen'
import CadastroContato from './screens/cadastroContato'
import ContatoScreen from "./screens/contatoScreen";
import EditScreen from "./screens/editScreen";
import { Header } from "react-native-elements";



const AppStack = createStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="Cadastro">
        <AppStack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <AppStack.Screen name="Cadastro" component={CadastroScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="CadastroContato" component={CadastroContato} options={{headerShown:false}}/>
        <AppStack.Screen name="Contatos" component={ContatoScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Edition" component={EditScreen} options={{headerShown:false}}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}





