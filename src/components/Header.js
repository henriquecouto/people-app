import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = props => (
  <View style={styles.container}>
    <Text style={styles.title}>{props.title}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 30,
    backgroundColor: '#6ca2f7',
  },
  title: {
    fontSize: 25,
    color: '#fff'
  },
})

export default Header