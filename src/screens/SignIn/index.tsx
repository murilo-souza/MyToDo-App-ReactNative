import React from 'react'
import { Container } from './styles'
import { Input } from '../../components/Input'

export function SignIn() {
  return (
    <Container>
      <Input title="E-mail" />
      <Input title="Senha" />
    </Container>
  )
}
