import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Line = ({ label, content }) => {
  return (
    <View style={styles.line}>
      <Text style={[styles.cell, styles.label]}>{label}: </Text>
      <Text style={styles.cell}>{content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  line: {
    // justifyContent:'center',
    flexDirection: 'row',
    padding: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
  },
  cell: {
    padding: 2,
  },
  label: {
    fontWeight: 'bold',
  }
})

export default Line