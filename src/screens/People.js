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
      .get('https://randomuser.me/api/?nat=br&results=5')
      .then(response => {
        const { results } = response.data
        this.setState({
          people: results
        })
      })
  }

  render() {

    return (
      <View>
        <PeopleList people={this.state.people}/>
      </View>
    )
  }
}
