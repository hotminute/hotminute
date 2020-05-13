import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Images } from './Images';

const styles = StyleSheet.create({
    topHeader: {
      height: 20,
      backgroundColor: '#fb607f'
    },
    container: {
      height: 50,
      backgroundColor: '#fb607f',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center'
    },
    nameStatusContainer: {
      flex:1,
      alignItems: 'flex-start'
    },
    name: {
      color: '#fff',
      marginLeft: 10,
      fontWeight: '700',
      fontSize: 16
    },
    lastSeen: {
      color: '#fff',
      marginLeft: 10,
      fontWeight: '400',
      fontSize: 12
    },
  });

export const Header = ({selectedId, selectId, data}) => (
  <View>
    <View style={styles.topHeader} />
    <View style={styles.container}>
      <Icon name="keyboard-backspace" style={{ marginLeft: 5 }} size={24} color="#fff" onPress={() => selectId(undefined)} />
      <Images imageId={selectedId} contentStyles={{image: { marginLeft: 5, width: 30, height: 30, borderRadius: 15 }}} />
      <View style={styles.nameStatusContainer}>
        <Text style={styles.name}>{data[selectedId].name}</Text>
        <Text style={styles.lastSeen}>{data[selectedId].lastSeen}</Text>
         </View>
        <Icon name="magnify" style={{ marginRight: 15 }} size={24} color="#fff" />
        <Icon name="dots-vertical" style={{ marginRight: 15 }} size={24} color="#fff" />
      </View>


       </View>
);