import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ActivityHistory } from '../pages/Mypage';

interface Props {
  data: ActivityHistory;
}
function HistoryItem({ data }: Props) {
  return (
    <View style={styles.historyItem}>
      <Text style={{ ...styles.historyText, flex: 3 }}>{data.date}</Text>
      <Text style={{ ...styles.historyText, flex: 2, textAlign: 'center' }}>{data.activity}</Text>
      <Text style={{ ...styles.historyText, flex: 2, textAlign: 'right' }}>{data.count} 개</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'gray',
    marginBottom: 5,
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  historyText: {
    fontSize: 16,
    color: 'white',
  },
});

export default HistoryItem;
