import React from 'react'
import { Container, Form } from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { InputBig } from '../../components/InputBig'
import { Button } from '../../components/Button'

export function NewTask() {
  return (
    <Container>
      <Header title="Nova task" />
      <Form>
        <Input title="Título da task" placeholder="De um título a sua task" />
        <Input title="Mandante" placeholder="Quem foi o mandante?" />
        <InputBig
          title="Descrição da task"
          multiline
          placeholder="Descreva sua task"
        />
      </Form>
      <Button title="Salvar" />
    </Container>
  )
}
