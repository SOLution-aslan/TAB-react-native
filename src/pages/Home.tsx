import React from 'react';
import { StyleSheet, View, Image, Pressable, Text } from 'react-native';
import { useAppDispatch } from '../store';
import userSlice from '../store/userSlice';

function Home() {
  const dispatch = useAppDispatch();

  const onPressConnect = () => {
    dispatch(
      userSlice.actions.setUser({
        address: 'H7fHSBqTT7mRPZkEaqc91pzcxX4io6ZByifa31goqdH5',
        token: 100,
      }),
    );
  };

  return (
    <View style={{ height: '100%' }}>
      <Image style={styles.imgContainer} source={require('../assets/img/pullup.png')} />
      <View style={styles.buttonContainer}>
        {/* TODO: 계정연결 로직 추가필요 */}
        <Pressable style={styles.button} onPress={onPressConnect}>
          <Text style={styles.buttonText}>continue with seedvault</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onPressConnect}>
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
