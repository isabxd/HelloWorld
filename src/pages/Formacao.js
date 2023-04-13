import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";

const Formacao = () => {
    return (
        <View>
            <Text> Formação </Text>
            <Button title="Voltar" onPress={() => navigation.navigate('Formacao')} />

        </View>
    );
}

export default Formacao;