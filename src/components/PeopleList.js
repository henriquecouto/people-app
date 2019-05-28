import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

import PeopleListItem from './PeopleListItem'

const PeopleList = props => {
  const { people, onPressItem } = props

  return (
    <FlatList
      style={styles.container}
      data={people}
      renderItem={({ item }) => (
        <PeopleListItem
          person={item}
          navegateToPersonDetail={onPressItem} />
      )}
      keyExtractor={item => item.login.username} />
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DF917D44'
  },
})

export default PeopleList