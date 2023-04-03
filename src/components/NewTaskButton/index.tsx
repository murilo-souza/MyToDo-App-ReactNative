import React from 'react'
import { Container } from './styles'
import { Plus } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import { RectButtonProps } from 'react-native-gesture-handler'

export function NewTaskButton(props: RectButtonProps) {
  const theme = useTheme()

  return (
    <Container {...props}>
      <Plus weight="fill" color={theme.colors.white} />
    </Container>
  )
}
