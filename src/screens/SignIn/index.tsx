import React from 'react'
import { Container, LogoContainer } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import KanbanLogo from '../../assets/kanban.svg'

export function SignIn() {
  return (
    <Container>
      <LogoContainer>
        <KanbanLogo width={150} height={150} />
      </LogoContainer>
      <Input title="E-mail" />
      <Input title="Senha" />
      <Button title="Entrar" />
    </Container>
  )
}
