import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Line = ({ label = "", content = "-" }) => {
  return (
    <View style={styles.line}>
      <Text style={[
        styles.cell,
        styles.label,
        label.length > 8 ? styles.longLabel : null
      ]}>{label}: </Text>
      <Text style={[styles.cell, styles.content]}>{content}</Text>
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
    flex: 1
  },
  content: {
    flex: 4
  },
  longLabel: {
    fontSize: 10
  }
})

export default Line