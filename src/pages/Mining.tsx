import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, Alert, TouchableOpacity } from 'react-native';

export type Activity = 'pullup' | 'pushup';

function Mining() {
  const [selected, setSelected] = useState<Activity>('pullup');

  return (
    <View style={{ height: '100%' }}>
      <View style={styles.selectBoxContainer}>
        <TouchableOpacity
          style={{
            ...styles.selectBox,
            backgroundColor: selected === 'pullup' ? 'orange' : 'white',
          }}
          onPress={() => setSelected('pullup')}
        >
          <Text
            style={{
              ...styles.selectBoxText,
              color: selected === 'pullup' ? 'white' : 'black',
            }}
          >
            Pull Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.selectBox,
            backgroundColor: selected === 'pushup' ? 'orange' : 'white',
          }}
          onPress={() => setSelected('pushup')}
        >
          <Text
            style={{
              ...styles.selectBoxText,
              color: selected === 'pushup' ? 'white' : 'black',
            }}
          >
            Push Up
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.cButton} onPress={() => Alert.alert('카메라 연결 해야댐')}>
          <Text style={styles.cText} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  selectBoxContainer: {
    flex: 5,
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 20,
  },
  selectBox: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  selectBoxText: {
    textAlign: 'center',
    fontSize: 32,
  },
  buttonContainer: {
    alignItems: 'center',
    flex: 1.4,
    justifyContent: 'center',
  },
  cButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: 'black',
    width: 80,
    height: 80,
    paddingVertical: 14,
  },
  cText: {
    color: 'white',
    fontSize: 10,
    textTransform: 'uppercase',
    backgroundColor: 'red',
    borderRadius: 25,
    width: 50,
    height: 50,
  },
});
export default Mining;
