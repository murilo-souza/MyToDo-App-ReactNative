import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes'
import { useEffect, useState } from 'react'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { Loading } from '../components/Loading'
import { SignIn } from '../screens/SignIn'

export function Routes() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((response) => {
      setUser(response)
      setIsLoading(false)
    })

    return subscriber
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>
  )
}
