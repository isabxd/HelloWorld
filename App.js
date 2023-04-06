import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <Text style={styles.titulo}> Olá Mundo! </Text>
      <Text>Meu nome é Isabella e esse é meu primeiro App em React!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99EDC3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    backgroundColor: "#5DBB53",
    padding: 30,
    boderRadius: 5
  },
});
