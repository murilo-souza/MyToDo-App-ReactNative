import React from 'react'
import { Container, Title } from './styles'
import { RectButtonProps } from 'react-native-gesture-handler'
import { ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components/native'

type ButtonProps = RectButtonProps & {
  title: string
  variant: 'default' | 'complete' | 'delete'
  isLoading?: boolean
}

export function Button({ title, variant, isLoading, ...rest }: ButtonProps) {
  const theme = useTheme()
  return (
    <Container {...rest} variant={variant}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color={
            variant === 'complete' ? theme.colors.zinc800 : theme.colors.white
          }
        />
      ) : (
        <Title variant={variant}>{title}</Title>
      )}
    </Container>
  )
}
