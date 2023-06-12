import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const Liquidity = () => {
  return (
    <ScrollView style={{ padding: 20 }}>
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.title}>User Info</Text>
        <View style={{ gap: 8 }}>
          <Text>Liquidity</Text>
        </View>
      </View>
      <View style={{ marginBottom: 50 }}>
        <Text style={styles.title}>Activity History</Text>
      </View>
    </ScrollView>
  );
};

export default Liquidity;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: 'black',
    marginBottom: 24,
  },
  button: {
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'black',
    width: 120,
    paddingVertical: 7,
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    textTransform: 'uppercase',
  },
});
