import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import VoiceCallScreen from '../Screens/VoiceCallScreen';

const ApplicationNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'Vido',
            headerTintColor: '#4456DC',
            headerTitleStyle: {fontSize: 20},
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="callingScreen"
          component={VoiceCallScreen}
          options={{
            headerTitle: 'calling screen ',
            headerTitleStyle: {fontSize: 20},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
