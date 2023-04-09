import React from 'react'
import { Container, Error } from './styles'
import { TextInputProps } from 'react-native'
import { Control, Controller } from 'react-hook-form'
import { InputBig } from '../../InputBig'

interface Props extends TextInputProps {
  control: Control
  name: string
  error: any
  title: string
  size: 'lg' | 'md'
}

export function InputBigForm({
  control,
  error,
  name,
  title,
  size,
  ...rest
}: Props) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputBig
            size={size}
            title={title}
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
        name={name}
      />

      {error && <Error>{error}</Error>}
    </Container>
  )
}
