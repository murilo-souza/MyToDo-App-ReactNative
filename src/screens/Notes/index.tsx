import React from 'react'
import { ButtonContainer, Container, NoteContainer } from './styles'
import { Header } from '../../components/Header'
import { InputBig } from '../../components/InputBig'
import { Button } from '../../components/Button'

export function Notes() {
  return (
    <Container>
      <Header title="Notas adicionais" />
      <NoteContainer></NoteContainer>

      <InputBig
        title="Nova nota"
        placeholder="Adicione uma nota relevante"
        size="md"
      />

      <ButtonContainer>
        <Button title="Adicionar nota" variant="complete" />
        <Button title="Finalizar task" variant="default" />
      </ButtonContainer>
    </Container>
  )
}
