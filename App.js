import { createAppContainer, createStackNavigator } from 'react-navigation'

import PeoplePage from './src/screens/People'

const StackNavigator = createStackNavigator({
  'Main': {
    'screen': PeoplePage,
  }
}, {
  defaultNavigationOptions:{
    title: 'Pessoas',
    headerStyle: {
      backgroundColor:'#CD5334',
    },
    headerTitleStyle: {
      color: '#fff',
      // flexGrow: 1,
    }
  }
})

const AppContainer = createAppContainer(StackNavigator)

export default AppContainer