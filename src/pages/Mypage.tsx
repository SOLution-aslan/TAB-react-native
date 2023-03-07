import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useAppDispatch, useAppSelector } from '../store';
import userSlice from '../store/userSlice';
import { Activity } from './Mining';
import HistoryItem from '../components/HistoryItem';

export interface ActivityHistory {
  id: string;
  activity: Activity;
  date: number;
  count: number;
}

const mockHistoryData: ActivityHistory[] = [
  { id: '12asdf', activity: 'pullup', date: 1678012009802, count: 5 },
  { id: '11asdf', activity: 'pullup', date: 1678012009802, count: 12 },
  { id: '121asdf', activity: 'pushup', date: 1678012009802, count: 2 },
  { id: '13asdf', activity: 'pullup', date: 1678012009802, count: 18 },
  { id: '15asdf', activity: 'pullup', date: 1678012009802, count: 4 },
  { id: '16asdf', activity: 'pullup', date: 1678012009802, count: 7 },
  { id: '18asdf', activity: 'pushup', date: 1678012009802, count: 4 },
  { id: '12aasdfdf', activity: 'pullup', date: 1678012009802, count: 1 },
  { id: '123qsdf', activity: 'pushup', date: 1678012009802, count: 13 },
  { id: '12aszxcdf', activity: 'pullup', date: 1678012009802, count: 9 },
];

function Mypage() {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.user);

  const onPressUnConnect = () => {
    dispatch(userSlice.actions.setUser({ address: '', token: 0 }));
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.title}>User Info</Text>
        <View style={{ gap: 8 }}>
          <Text>Token : {userInfo.token} tab</Text>
          <Text>Address : {userInfo.address}</Text>
          <View style={{ alignItems: 'center' }}>
            <Pressable style={styles.button} onPress={onPressUnConnect}>
              <Text style={styles.buttonText}>unconnect</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 50 }}>
        <Text style={styles.title}>Activity History</Text>
        {mockHistoryData.map((item) => {
          return <HistoryItem key={item.id} data={item} />;
        })}
      </View>
    </ScrollView>
  );
}

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

export default Mypage;
