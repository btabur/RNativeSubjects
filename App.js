import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './src/screens/LoginPage';
import RegisterPage from './src/screens/RegisterPage'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  // screenOptions={{headerShown:false}}  sayfanın üst kısmında appbar oluşmaması için
  return (
    <NavigationContainer>
         <Stack.Navigator screenOptions={{headerShown:false}}>  
        <Stack.Screen
          name="Login"
          component={LoginPage}
        />
        <Stack.Screen name="Register" component={RegisterPage} />
      </Stack.Navigator>

    </NavigationContainer>
  
  );
}


