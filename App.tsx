/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './src/global/theme'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins'
import { ActivityIndicator } from 'react-native'
import { Routes } from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent />
      {fontsLoaded ? <Routes /> : <ActivityIndicator />}
    </ThemeProvider>
  )
}
