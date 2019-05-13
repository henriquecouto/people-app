import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = props => (
  <View style={style.container}>
    <Text style={style.title}>{props.title}</Text>
  </View>
);

const style = StyleSheet.create({
  container:{
    padding: 10,
    paddingTop: 30,
    backgroundColor: '#6ca2f7',
  },
  title: {
    fontSize: 25,
    color: '#fff'
  },
});

export default Header;