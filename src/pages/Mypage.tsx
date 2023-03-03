import React from 'react';
import { Button, View } from 'react-native';
import { useAppDispatch } from '../store';
import userSlice from '../store/userSlice';

function Mypage() {
  const dispatch = useAppDispatch();

  return (
    <View>
      <Button
        title="unconnect"
        onPress={() => dispatch(userSlice.actions.setUser({ address: '', token: 0 }))}
      />
    </View>
  );
}

export default Mypage;
