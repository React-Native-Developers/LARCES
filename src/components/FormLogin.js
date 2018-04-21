import React from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

import logo from "../../imgs/Larces.png";

export default props => (
    <View style={styles.principalView}>
        <View style={styles.viewTop}>
            <Image source={logo} style={styles.imageTop}/>
            <Text style={styles.txtTop}>Laboratório de Redes de Computadores e Segurança</Text>
        </View>
        <View style={styles.viewMid}>
            <TextInput style={styles.txtInputEmail} placeholder='E-mail' placeholderTextColor='white' />
            <TextInput style={styles.txtInputPassword} placeholder='Senha' placeholderTextColor='white'/>
            <TouchableHighlight onPress={() => false }>
                <Text style={styles.txtMid}>Ainda não tem cadastro? Cadastre-se</Text>
            </TouchableHighlight>
        </View>
        <View style={styles.viewBotton}>
            <Button title="Acessar" color='#115E54' onPress={() => false} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    principalView: {
        flex: 1, 
        padding: 10,
        backgroundColor: '#2e3638'
    },
    //-----------------TOP---------------
    viewTop: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageTop: {
        //marginTop: 200,
        width: 250,
        height: 50
    },
    txtTop: {
        marginLeft: 100,
        width: 200,
        color: 'white',
        fontSize: 12
    },
    //---------------MID------------------
    viewMid: { 
        flex: 2
    },
    txtInputEmail: {
        fontSize: 20, 
        height: 45,
        color: 'white'
    },
    txtInputPassword: {
        fontSize: 20, 
        height: 45
    },
    txtMid: {
        fontSize: 20,
        color: 'white'
    },
    //---------------Botton-------------
    viewBotton: { 
        flex: 2
    }
});
