import React from 'react';
import { Button, View } from 'react-native';
import { useAppDispatch } from '../store';
import userSlice from '../store/userSlice';

function Home() {
  const dispatch = useAppDispatch();

  return (
    <View>
      <Button
        title="connect"
        onPress={() => dispatch(userSlice.actions.setUser({ address: '123123', token: 100 }))}
      />
    </View>
  );
}

export default Home;
