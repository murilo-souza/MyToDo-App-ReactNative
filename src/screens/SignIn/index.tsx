import React, { useState } from 'react'
import { ButtonTitle, Container, LogoContainer, SignInButton } from './styles'
import { Input } from '../../components/Input'

import KanbanLogo from '../../assets/kanban.svg'
import { Alert } from 'react-native'
import auth from '@react-native-firebase/auth'

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleHome() {
    if (!email || !password) {
      return Alert.alert('Entrar', 'Informe e-mail e senha')
    }

    setIsLoading(true)

    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.error(error)
        setIsLoading(false)

        if (
          error.code === 'auth/invalid-email' ||
          error.code === 'auth/wrong-password'
        ) {
          return Alert.alert('Entrar', 'E-mail ou senha inválida.')
        }

        if (error.code === 'auth/user-not-found') {
          return Alert.alert('Entrar', 'E-mail ou senha inválida.')
        }

        return Alert.alert('Entrar', 'Não foi possível acessar')
      })
  }

  return (
    <Container>
      <LogoContainer>
        <KanbanLogo width={150} height={150} />
      </LogoContainer>
      <Input
        title="E-mail"
        placeholder="Digite seu e-mail"
        onChangeText={setEmail}
        value={email}
      />
      <Input
        title="Senha"
        placeholder="Digite sua senha"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        autoCapitalize="none"
      />

      <SignInButton onPress={handleHome} disabled={isLoading}>
        <ButtonTitle>Entrar</ButtonTitle>
      </SignInButton>
    </Container>
  )
}
