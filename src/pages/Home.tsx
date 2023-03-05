import React from 'react';
import { StyleSheet, View, Image, Pressable, Text } from 'react-native';
import { useAppDispatch } from '../store';
import userSlice from '../store/userSlice';

function Home() {
  const dispatch = useAppDispatch();

  return (
    <View style={{ display: 'flex', height: '100%' }}>
      <Image style={styles.imgContainer} source={require('../assets/img/pullup.png')} />
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          // TODO: 계정연결 로직 추가필요
          onPress={() => dispatch(userSlice.actions.setUser({ address: '123123', token: 100 }))}
        >
          <Text style={styles.buttonText}>continue with seedvault</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          // TODO: 계정연결 로직 추가필요
          onPress={() => dispatch(userSlice.actions.setUser({ address: '123123', token: 100 }))}
        >
          <Text style={styles.buttonText}>continue with phantom</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    marginTop: 20,
    flex: 2,
    resizeMode: 'cover',
    width: '100%',
  },
  buttonContainer: {
    gap: 10,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'green',
    width: 300,
    paddingVertical: 10,
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    textTransform: 'uppercase',
  },
});

export default Home;
