import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useAppSelector } from '../store';
import Home from '../pages/Home';
import Mypage from '../pages/Mypage';
import Shop from '../pages/Shop';
import Start from '../pages/Start';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function Navigator() {
  const isLoggedIn = useAppSelector((state) => state.user.address);
  console.log(isLoggedIn);

  return (
    <NavigationContainer>
      {!isLoggedIn ? (
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

export default Navigator;
