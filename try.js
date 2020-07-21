import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ResponsiveTable from './Components/ResponsiveTable';
import HomeScreen from './Components/HomeScreen'



const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ResponsiveTable"  component={ResponsiveTable}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;