import React from 'react'
import { View } from 'react-native'

import axios from 'axios'

import PeopleList from '../components/PeopleList'

export default class People extends React.Component {
  state = {
    people: []
  }

  componentDidMount = () => {
    axios
      .get('https://randomuser.me/api/?nat=br&results=15')
      .then(response => {
        const { results } = response.data
        this.setState({
          people: results
        })
      })
  }

  render() {
    const { navigation } = this.props
    return (
      <View>
        <PeopleList
          people={this.state.people}
          onPressItem={pageParams => navigation.navigate('PersonDetail', pageParams)} />
      </View>
    )
  }
}
