import React from 'react'
import { Container, Title } from './styles'
import { RectButtonProps } from 'react-native-gesture-handler'

type ButtonProps = RectButtonProps & {
  title: string
  variant: 'default' | 'complete'
}

export function Button({ title, variant, ...rest }: ButtonProps) {
  return (
    <Container {...rest} variant={variant}>
      <Title variant={variant}>{title}</Title>
    </Container>
  )
}
