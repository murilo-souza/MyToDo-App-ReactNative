import React from 'react'
import { Container, Header } from './styles'
import LogoSVG from '../../assets/secondary_logo.svg'
import { SignOut } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'

export function Home() {
  const theme = useTheme()

  return (
    <Container>
      <Header>
        <LogoSVG width={200} height={150} />
        <SignOut size={25} color={theme.colors.zinc400} />
      </Header>
    </Container>
  )
}
