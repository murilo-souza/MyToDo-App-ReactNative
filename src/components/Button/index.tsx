import React from 'react'
import { Container, Title } from './styles'
import { RectButtonProps } from 'react-native-gesture-handler'

type ButtonProps = RectButtonProps & {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}
