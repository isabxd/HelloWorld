import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './src/pages/Home';
import Formacao from './src/pages/Formacao';

   const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name= "Home" component={Home}/>
          <Stack.Screen name= "Formacao" component={Formacao}/>
      </Stack.Navigator>
    </NavigationContainer>   
  );
}
