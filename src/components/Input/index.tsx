import React from 'react'
import { Container, Title, InputText } from './styles'
import { TextInputProps } from 'react-native'

type InputProps = TextInputProps & {
  title: string
}

export function Input({ title, ...rest }: InputProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <InputText {...rest} />
    </Container>
  )
}
