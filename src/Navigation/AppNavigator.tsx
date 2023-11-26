
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CountrySelect from '../screens/CountrySelect';
import LoginPage from '../screens/auth/Login';
const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='CountrySelect'>
        <Stack.Screen name="CountrySelect" component={CountrySelect} options={{
            headerShown:false,
        }}/>
        <Stack.Screen name="Login" component={LoginPage} options={{
            headerShown:false,
        }} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
