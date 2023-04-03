import React from 'react'
import { Container, LogoContainer } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import KanbanLogo from '../../assets/kanban.svg'
import { useNavigation } from '@react-navigation/native'

export function SignIn() {
  const navigation = useNavigation()

  function handleSignIn() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <LogoContainer>
        <KanbanLogo width={150} height={150} />
      </LogoContainer>
      <Input title="E-mail" />
      <Input title="Senha" />
      <Button title="Entrar" variant="default" onPress={handleSignIn} />
    </Container>
  )
}
