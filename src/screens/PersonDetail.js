import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Line from '../components/Line';

import { capitalizeFirstLetter } from '../utils'

class PersonDetail extends React.Component {
  render() {
    const { person } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: person.picture.large }}
          style={styles.avatar} />
        <View style={styles.detailContainer}>
          <Line label='Email' content={person.email} />
          <Line label='Número' content={capitalizeFirstLetter(person.phone)} />
          <Line label='Cidade' content={capitalizeFirstLetter(person.location.city)} />
          <Line label='Estado' content={capitalizeFirstLetter(person.location.state)} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center'
  },
  avatar: {
    aspectRatio: 1,
    height: 200,
    borderRadius: 100,
  },
  detailContainer: {
    backgroundColor: '#DF917D44',
    marginTop: 10,
    borderWidth: 2,
    borderBottomWidth: 1,
    borderColor: '#bbb',
    width: '100%',
  },
})

export default PersonDetail