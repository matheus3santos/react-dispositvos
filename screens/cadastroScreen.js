import React, { Component } from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native'
import { View, Image, Button } from "react-native";




export default class Home extends React.component {

    render() {
        return (
            <View style={styles.container}>
            <button title="Ir para home" onPress={
                () => this.props.navigation.navigate('Home')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    })