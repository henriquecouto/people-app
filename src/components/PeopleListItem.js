import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

import { capitalizeFirstLetter } from '../utils'

const PeopleListItem = props => {
  const { person, navegateToPersonDetail } = props
  const { title, first, last } = person.name
  const { thumbnail } = person.picture
  return (
    <TouchableOpacity onPress={() => navegateToPersonDetail({ person })} >
      <View style={styles.container}>
        <Image
          source={{ uri: thumbnail }}
          style={styles.avatar}
        />
        <Text style={styles.text}>
          {`${
            capitalizeFirstLetter(title)
            } ${
            capitalizeFirstLetter(first)
            } ${
            capitalizeFirstLetter(last)
            }`}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
    flex: 7,
  },
  avatar: {
    aspectRatio: 1,
    flex: 1,
    borderRadius: 50,
  }
})

export default PeopleListItem