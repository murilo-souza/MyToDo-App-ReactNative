import React from 'react'
import { Container, Title, InputText } from './styles'
import { TextInputProps } from 'react-native'

type InputProps = TextInputProps & {
  title: string
  size: 'lg' | 'md'
}

export function InputBig({ title, size, ...rest }: InputProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <InputText {...rest} size={size} />
    </Container>
  )
}
