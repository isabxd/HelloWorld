import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";

const Home = ({ navigation }) => {
    return (
        <View>
            <Text> Pagina Inicial</Text>
            <Button title="Formacao" onPress={() => navigation.navigate('Formacao')} />
        </View>
    );
}

export default Home;

