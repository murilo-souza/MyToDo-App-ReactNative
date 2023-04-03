import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens/Home'
import { NewTask } from '../screens/NewTask'
import { Notes } from '../screens/Notes'

const { Navigator, Screen } = createStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="new" component={NewTask} />
      <Screen name="notes" component={Notes} />
    </Navigator>
  )
}
