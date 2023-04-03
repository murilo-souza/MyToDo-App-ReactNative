import React from 'react'
import { Container, Title } from './styles'
import { BorderlessButton } from 'react-native-gesture-handler'
import { ArrowLeft } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

type HeaderProps = {
  title: string
}

export function Header({ title }: HeaderProps) {
  const theme = useTheme()
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <Container>
      <BorderlessButton onPress={handleGoBack}>
        <ArrowLeft color={theme.colors.white} size={25} />
      </BorderlessButton>
      <Title>{title}</Title>
    </Container>
  )
}
