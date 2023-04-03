import React from 'react'
import { Container, Title } from './styles'
import { BorderlessButton } from 'react-native-gesture-handler'
import { ArrowLeft } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'

type HeaderProps = {
  title: string
}

export function Header({ title }: HeaderProps) {
  const theme = useTheme()

  return (
    <Container>
      <BorderlessButton>
        <ArrowLeft color={theme.colors.white} size={25} />
      </BorderlessButton>
      <Title>{title}</Title>
    </Container>
  )
}
