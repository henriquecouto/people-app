import { createAppContainer, createStackNavigator } from 'react-navigation'

import PeoplePage from './src/screens/People'
import PersonDetail from './src/screens/PersonDetail'

import { capitalizeFirstLetter } from './src/utils'

const StackNavigator = createStackNavigator({
  Main: {
    screen: PeoplePage,
  },
  PersonDetail: {
    screen: PersonDetail,
    navigationOptions: ({ navigation }) => {
      const { name } = navigation.state.params.person
      return ({
        title: `${capitalizeFirstLetter(name.first)} ${capitalizeFirstLetter(name.last)}`,
      })
    }
  }
}, {
    defaultNavigationOptions: {
      title: 'Pessoas',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#CD5334',
      },
    }
  })

const AppContainer = createAppContainer(StackNavigator)

export default AppContainer