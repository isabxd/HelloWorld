import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";

const Formacao = ({navigation}) => {
    return (
        <View>
            <Text> Formação </Text>
            <Button title="Voltar" onPress={ () => navigation.goBack() } />

        </View>
    );
}

export default Formacao;