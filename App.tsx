import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from './src/pages/Home';
import Start from './src/pages/Start';
import Shop from './src/pages/Shop';
import Mypage from './src/pages/Mypage';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function App(): JSX.Element {
  const isLoggedIn = true;

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator
          activeColor="#f0edf6"
          inactiveColor="black"
          barStyle={{ backgroundColor: '#694fad' }}
        >
          <Tab.Screen name="Start" component={Start} />
          <Tab.Screen name="Shop" component={Shop} />
          <Tab.Screen name="Mypage" component={Mypage} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
